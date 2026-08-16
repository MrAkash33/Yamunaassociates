export const metadata = {
  title: "Available Plots | Yamuna Associations",
};

const plots = [
  {
    id: "Pocket T 610",
    facing: "North Unregistered Corner 45/18",
    zone: "Premium",
    price: "4.50 Crore",
    status: "Available",
  },
  {
    id: "Pocket S 336",
    facing: "Registered East",
    zone: "Premium",
    price: "3 Crore",
    status: "Available",
  },
  {
    id: "Pocket 6B",
    area: "300 sq mtr",
    facing: "West",
    zone: "Premium",
    price: "1.95 Crore",
    status: "Available",
    registration: "Unregistered",
    road: "18 mtr",
    payment: "White 90 Lakh",
    sector: "Sector 18",
  },
  {
    id: "Pocket 17C",
    area: "120 sq mtr",
    facing: "East",
    zone: "Premium",
    price: "1.05 Crore",
    status: "Available",
    feature: "Park Facing",
  },
  {
    id: "Pocket 7D",
    area: "60 sq mtr",
    facing: "Park",
    zone: "Premium",
    price: "70 Lakh",
    status: "Available",
  },
  {
    id: "Pocket J",
    area: "300 sq mtr",
    facing: "North",
    zone: "Premium",
    price: "2.40 Crore",
    status: "Available",
    registration: "Registered",
    road: "12 mtr",
    completion: "Completion",
    payment: "White 1.20 Crore",
    sector: "Sector 18",
  },
];

const advantages = [
  {
    title: "Strategic highway access",
    description: "Plots are within 4 km of the Yamuna Expressway and near the upcoming Noida International Airport corridor.",
  },
  {
    title: "Strong rental demand",
    description: "Residential and investment buyers prefer this zone for campus, manufacturing, and service sector demand.",
  },
  {
    title: "Approved land titles",
    description: "Each available plot has clear land records and rapid registration support through our legal team.",
  },
];

const buyerSteps = [
  "Select a plot based on facing and size",
  "Review the detailed cost sheet and site plan",
  "Confirm booking and complete the payment schedule",
];

export default function AvailablePlotsPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_45%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Available plots
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Premium plots for immediate investment and development
          </h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">
            View our current inventory of ready-to-book plots across Greater Noida West, sector-backed townships, and the Yamuna Expressway corridor.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
         <div className="grid gap-6 md:grid-cols-3">
            {plots.map((plot) => (
              <article
                key={plot.id}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{plot.id}</h2>

                    <p className="mt-2 text-slate-300">
                      {plot.zone} zone • {plot.facing}
                    </p>
                  </div>

                  <span
                    className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                      plot.status === "Available"
                        ? "bg-emerald-500/20 text-emerald-200"
                        : "bg-slate-700/70 text-slate-300"
                    }`}
                  >
                    {plot.status}
                  </span>
                </div>

                <dl className="mt-6 grid gap-4 text-slate-300">
                  {plot.sector && (
                    <div>
                      <dt className="text-sm font-medium text-slate-400">Sector</dt>
                      <dd className="mt-1 text-base">{plot.sector}</dd>
                    </div>
                  )}

                  {plot.area && (
                    <div>
                      <dt className="text-sm font-medium text-slate-400">Plot Area</dt>
                      <dd className="mt-1 text-base">{plot.area}</dd>
                    </div>
                  )}

                  {plot.road && (
                    <div>
                      <dt className="text-sm font-medium text-slate-400">Road</dt>
                      <dd className="mt-1 text-base">{plot.road}</dd>
                    </div>
                  )}

                  {plot.registration && (
                    <div>
                      <dt className="text-sm font-medium text-slate-400">Registration</dt>
                      <dd className="mt-1 text-base">{plot.registration}</dd>
                    </div>
                  )}

                  {plot.feature && (
                    <div>
                      <dt className="text-sm font-medium text-slate-400">Feature</dt>
                      <dd className="mt-1 text-base">{plot.feature}</dd>
                    </div>
                  )}

                  {plot.completion && (
                    <div>
                      <dt className="text-sm font-medium text-slate-400">Status Details</dt>
                      <dd className="mt-1 text-base">{plot.completion}</dd>
                    </div>
                  )}

                  {plot.payment && (
                    <div>
                      <dt className="text-sm font-medium text-slate-400">Payment</dt>
                      <dd className="mt-1 text-base">{plot.payment}</dd>
                    </div>
                  )}

                  <div>
                    <dt className="text-sm font-medium text-slate-400">Price</dt>
                    <dd className="mt-1 text-xl font-semibold text-white">
                      {plot.price}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-3xl font-bold text-white">Plot location map</h2>
            <p className="mt-4 text-slate-300">Detailed location planning and nearby infrastructure for available plots in the Yamuna Expressway area.</p>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
              <iframe
                src="https://maps.google.com/maps?q=yamuna%20expressway%20greater%20noida&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                className="border-0"
                title="Available plots location map"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {advantages.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-3xl font-bold text-white">Plot booking process</h2>
            <p className="mt-4 text-slate-300">A simple three-step buying flow for new investors and end-users.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {buyerSteps.map((step) => (
                <div key={step} className="rounded-3xl bg-slate-900/90 p-6 text-slate-200">
                  <p className="font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
