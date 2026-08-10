export const metadata = {
  title: "Maps | Yamuna Associations",
};

const mapItems = [
  {
    title: "Greater Noida West",
    description: "Residential sectors designed around schools, hospitals, and metro connectivity.",
  },
  {
    title: "Yamuna Expressway Corridor",
    description: "Highway-facing plots and commercial hubs with fast airport access.",
  },
  {
    title: "Alpha 1 & Alpha 2",
    description: "Premium housing and retail zones with planned civic infrastructure.",
  },
];

const features = [
  {
    title: "Sector planning",
    description: "Clear zoning between residential, commercial, and green spaces improves long-term value.",
  },
  {
    title: "Connectivity matrix",
    description: "Highway, metro, and railway links are shown so buyers can compare commute times.",
  },
  {
    title: "Future infrastructure",
    description: "Upcoming expressways, airport access, and educational campuses are all highlighted.",
  },
];

export default function MapsPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_40%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Maps</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Complete location and corridor maps</h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">Review the master plan, sector locations, and nearby transport links that define our plot and project offerings.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
              <h2 className="text-3xl font-bold text-white">Interactive corridor map</h2>
              <p className="mt-4 text-slate-300">Use the map to compare project locations, town planning, and site access across Greater Noida West and the Yamuna Expressway region.</p>
              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                <iframe
                  src="https://maps.google.com/maps?q=greater%20noida%20west%20yamuna%20expressway&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="420"
                  loading="lazy"
                  className="border-0"
                  title="Location map overview"
                />
              </div>
            </div>

            <div className="space-y-6">
              {mapItems.map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
                <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-3xl font-bold text-white">Why location matters</h2>
            <p className="mt-4 text-slate-300">Choosing a good plot means considering future transport corridors, civic facilities, and the next wave of local development.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Connects to the Noida-Greater Noida Expressway within 12 minutes.</li>
              <li>• Located near planned educational institutions and healthcare hubs.</li>
              <li>• Aligned with smart-city zoning and long-term municipal approval plans.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
