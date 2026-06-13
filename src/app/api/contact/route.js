import nodemailer from 'nodemailer';

const EMAIL_FROM = process.env.EMAIL_FROM || 'Yamuna Associates <no-reply@yourdomain.com>';
const EMAIL_TO = process.env.EMAIL_TO || 'akashkumarchourasiya@gmail.com';

async function createTransporter() {
  // Prefer real SMTP config from env; do not use placeholder hosts like smtp.example.com
  const host = 'smtp.gmail.com';
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = process.env.EMAIL_SECURE === 'true';
  const user = 'ootfitnow@gmail.com';
  const pass = 'hcghdonzcafmmjnh';

  // Use SMTP only when host/user/pass are provided and host does not look like a placeholder
  const isPlaceholderHost = typeof host === 'string' && /example\.com/i.test(host);
  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  console.log({
  host,
  user,
  passExists: !!pass,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "SET" : "NOT SET",
});

  // Fallback: create a test account (Ethereal) for local development
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
}

async function sendEmail(data) {
  if (!EMAIL_FROM || !EMAIL_TO) {
    throw new Error('Email configuration is missing. Set EMAIL_FROM and EMAIL_TO in environment variables.');
  }

  const htmlBody = `
    <h2>New contact request from Yamuna Associates</h2>
    <p><strong>Full Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Property Type:</strong> ${data.propertyType}</p>
    <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
  `;

  const textBody = `New contact request from Yamuna Associates\n\nFull Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nProperty Type: ${data.propertyType}\nMessage: ${data.message}`;

  const transporter = await createTransporter();

  const info = await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: 'New contact request from website',
    text: textBody,
    html: htmlBody,
  });

  // If using Ethereal (test account), return preview URL for debugging
  const previewUrl = nodemailer.getTestMessageUrl(info);
  return { info, previewUrl };
}

async function sendWhatsApp(data) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromWhatsApp = process.env.TWILIO_WHATSAPP_FROM;
  const toWhatsApp = process.env.TWILIO_WHATSAPP_TO;

  if (!accountSid || !authToken || !fromWhatsApp || !toWhatsApp) {
    return;
  }

  const body = `New request from ${data.fullName} (%0AEmail: ${data.email}%0APhone: ${data.phone}%0AProperty Type: ${data.propertyType}%0AMessage: ${encodeURIComponent(data.message)})`;
  const params = new URLSearchParams({
    To: toWhatsApp,
    From: fromWhatsApp,
    Body: body,
  });

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`WhatsApp send failed: ${errorText}`);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.fullName || !data.email || !data.phone || !data.propertyType || !data.message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }
    const result = await sendEmail(data);
    // await sendWhatsApp(data);

    const responsePayload = { success: true };
    if (result && result.previewUrl) responsePayload.previewUrl = result.previewUrl;

    return new Response(JSON.stringify(responsePayload), { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);

    // Helpful hints for common SMTP failures
    if (error && error.code === 'ECONNREFUSED') {
      return new Response(JSON.stringify({ error: `SMTP connection refused (${error.address}:${error.port}). Check EMAIL_HOST/EMAIL_PORT and that your SMTP server is reachable.` }), { status: 502 });
    }

    if (error && error.code === 'ENOTFOUND') {
      const host = process.env.EMAIL_HOST || 'smtp.example.com';
      return new Response(JSON.stringify({ error: `DNS lookup failed for SMTP host (${host}). Ensure the host is correct and resolvable.` }), { status: 502 });
    }

    return new Response(JSON.stringify({ error: error.message || 'Unable to send contact request.' }), { status: 500 });
  }
}
