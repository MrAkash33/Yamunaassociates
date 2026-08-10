export const metadata = {
  title: "Services | Yamuna Associations",
};

const services = [
  {
    title: "Property consultation",
    description: "One-on-one advisory to help you choose the best plot or apartment based on budget, location, and growth potential.",
  },
  {
    title: "Loan & financing support",
    description: "Guidance on home loans, plot financing, and repayment planning with trusted banking partners.",
  },
  {
    title: "Legal title verification",
    description: "Complete land title checks, approvals, and agreement review to keep your purchase secure.",
  },
  {
    title: "Site visit coordination",
    description: "Schedule guided property tours for available plots and apartments with flexible appointment slots.",
  },
];

const supportSteps = [
  "Schedule a site visit",
  "Review cost sheet and approvals",
  "Complete booking and take possession",
];

const serviceAreas = [
  {
    title: "Greater Noida & GN West",
    detail: "Residential and commercial plots with access to metro, schools, and expressway connectivity.",
  },
  {
    title: "Yamuna Expressway Corridor",
    detail: "Investment-focused land parcels near airport and highway infrastructure.",
  },
  {
    title: "Alpha sectors",
    detail: "Premium township developments with immediate civic amenities and retail options.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_40%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Services</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Full-service real estate support for every buyer</h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">From plot selection to legal clearance, we provide end-to-end services for new buyers, investors, and corporate clients.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl grid gap-10 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-3xl font-bold text-white">Service area map</h2>
            <p className="mt-4 text-slate-300">We operate across Greater Noida, Yamuna Expressway, and the Alpha sector corridor to deliver quick site visits and approvals.</p>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              <iframe
                src="https://maps.google.com/maps?q=greater%20noida%20yamuna%20expressway&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                className="border-0"
                title="Service area map"
              />
            </div>
          </div>

          <div className="space-y-6">
            {serviceAreas.map((area) => (
              <article key={area.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
                <h3 className="text-2xl font-semibold text-white">{area.title}</h3>
                <p className="mt-4 text-slate-300">{area.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold text-white">How our support works</h2>
          <p className="mt-4 text-slate-300">A simple three-step support process that makes property buying clear and reliable.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {supportSteps.map((step) => (
              <div key={step} className="rounded-3xl bg-slate-900/90 p-6 text-slate-200">
                <p className="font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
