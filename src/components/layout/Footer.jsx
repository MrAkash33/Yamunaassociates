import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-12">

          {/* Company */}

          <div className="lg:col-span-4">

          <img src='/goldlogo.png' style={{width:"200px",height:"82px"}}/>

            <p className="mt-5 leading-8 text-slate-300">
              Yamuna Associates is a trusted real estate consultant
              specializing in residential, commercial, and YEIDA
              investment opportunities across Greater Noida and
              Yamuna Expressway regions.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              With years of experience and transparent processes,
              we help buyers, investors, and NRI clients make
              informed property decisions with confidence.
            </p>

          </div>

          {/* Quick Links */}

          <div className="lg:col-span-2">

            <h4 className="mb-5 text-lg font-semibold uppercase">
              Quick Links
            </h4>

            <ul className="space-y-3">

              <li>
                <Link href="/" className="text-slate-300 hover:text-yellow-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/projects" className="text-slate-300 hover:text-yellow-400">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/blogs" className="text-slate-300 hover:text-yellow-400">
                  Blogs
                </Link>
              </li>

              <li>
                <Link href="/services" className="text-slate-300 hover:text-yellow-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-yellow-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact-us" className="text-slate-300 hover:text-yellow-400">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="lg:col-span-3">

            <h4 className="mb-5 text-lg font-semibold uppercase">
              Contact
            </h4>

            <div className="space-y-4 text-slate-300">

              <p>
                📧 info@yamunaassociates.com
              </p>

              <p>
                📞 +91 87000 88376
              </p>

              <p>
                📍 O-91, Second floor Noida Sec-12, Pin Code : 201301
              </p>

              <p className="italic text-slate-400">
                Serving Greater Noida, YEIDA &
                Yamuna Expressway Region.
              </p>

            </div>

            <button className="mt-5 rounded-xl border border-yellow-400 px-5 py-3 text-yellow-400 transition hover:bg-yellow-400 hover:text-black">
              View on Google Maps
            </button>

          </div>

          {/* Social */}

          <div className="lg:col-span-3">

            <h4 className="mb-5 text-lg font-semibold uppercase">
              Follow Us
            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black"
              >
                FB
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black"
              >
                IN
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black"
              >
                YT
              </a>

            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">

              <h5 className="text-sm uppercase tracking-wider text-slate-400">
                Visitor Count
              </h5>

              <div className="mt-2 text-3xl font-bold text-yellow-400">
                24,730
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">

          <p>
            © 2026 Yamuna Associates. All Rights Reserved.
          </p>

          <p className="mt-2">
            Powered by v1.0
          </p>

        </div>

      </div>

    </footer>
  );
}