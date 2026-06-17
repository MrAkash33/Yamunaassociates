'use client';

import { useState } from 'react';

const propertyTypes = [
  'Residential Plot',
  'Commercial Plot',
  'Apartment',
  'Other',
];

export default function ContactCTA() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyType: propertyTypes[0],
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  async function handleSubmit(event) {
    console.log("--hey")
    event.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      console.log("--i am ",form


      )
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      console.log("-->result", result);

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setStatus({ loading: false, error: '', success: 'Your request has been sent successfully.' });
      setForm({ fullName: '', email: '', phone: '', propertyType: propertyTypes[0], message: '' });
    } catch (error) {
      setStatus({ loading: false, error: error.message || 'Unable to send request.', success: '' });
    }
  }

  return (
    <section className="bg-amber-400 py-24 px-6 text-slate-950 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950/95 p-10 shadow-xl shadow-black/20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Stay Updated</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Be the first to know</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Share your details and property preferences below. We will send the information directly to our team via email and WhatsApp.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <p>📞 +91 87000 88376</p>
              <p>📧 info@yamunaassociates.com</p>
              <p>🌍 Greater Noida • Yamuna Expressway</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-slate-950">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">Full Name</span>
                <input
                  required
                  placeholder='Full Name'
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="mt-2 w-full rounded-3xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold">Email Address</span>
                <input
                  type="email"
                  placeholder='Email Id'
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-3xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">Phone Number</span>
                <input
                  type="tel"
                  required
                  placeholder='Mobile number'
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full rounded-3xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold">Property Type</span>
                <select
                  value={form.propertyType}
                  onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                  className="mt-2 w-full rounded-3xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold">Tell us about your requirements</span>
              <textarea
                required
                placeholder='Enter Message'
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </label>

            {status.error && <p className="text-sm text-red-400">{status.error}</p>}
            {status.success && <p className="text-sm text-emerald-400">{status.success}</p>}

            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.loading ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
