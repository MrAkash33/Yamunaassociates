export const metadata = {
  title: "Projects | Yamuna Associations",
};

const projects = [
  {
    name: "Yamuna Heights",
    location: "Sector 22, Greater Noida West",
    units: "2 BHK, 3 BHK",
    status: "Possession from Q4 2026",
    price: "₹58 Lakh onwards",
  },
  {
    name: "Expressway Commercial Hub",
    location: "Yamuna Expressway, Plot 19",
    units: "Retail, office suites",
    status: "Construction started",
    price: "₹1.1 Crore onwards",
  },
  {
    name: "Green Valley Residences",
    location: "Alpha 1 Sector, Greater Noida",
    units: "3 BHK, 4 BHK",
    status: "Ready to occupy",
    price: "₹92 Lakh onwards",
  },
];

const benefits = [
  {
    title: "High-growth location",
    description: "Yamuna Expressway and GN West are among the fastest-appreciating corridors in Uttar Pradesh.",
  },
  {
    title: "Premium amenities",
    description: "Clubhouse, landscaped avenues, power backup, and security are included across our flagship projects.",
  },
  {
    title: "Transparent pricing",
    description: "We publish complete cost sheets with no hidden charges for plot and apartment bookings.",
  },
];

const process = [
  "Site visit and plot selection",
  "Documentation and booking confirmation",
  "Construction updates and handover",
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_45%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Projects
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Flagship developments with strong investment potential
          </h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">
            Explore our current residential and commercial projects across Greater Noida and Yamuna Expressway. Each development includes transparent pricing, possession timelines, and location highlights.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
                <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-amber-300">{project.status}</p>
                <dl className="mt-6 grid gap-4 text-slate-300">
                  <div>
                    <dt className="text-sm font-medium text-slate-400">Location</dt>
                    <dd className="mt-1 text-base">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-400">Unit mix</dt>
                    <dd className="mt-1 text-base">{project.units}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-400">Starting price</dt>
                    <dd className="mt-1 text-base">{project.price}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold text-white">Project location map</h2>
              <p className="mt-4 text-slate-300">
                See the full corridor layout that covers Greater Noida West, Yamuna Expressway, and Alpha sectors. Our developments are positioned for easy highway access and fast appreciation.
              </p>
              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                <iframe
                  src="https://maps.google.com/maps?q=greater%20noida%20yamuna%20expressway&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="420"
                  loading="lazy"
                  className="border-0"
                  title="Projects location map"
                />
              </div>
            </div>
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
              <div>
                <h3 className="text-2xl font-semibold text-white">Why these projects matter</h3>
                <p className="mt-4 text-slate-300">
                  The corridor benefits from rapid infrastructure growth, strong rental demand, and proximity to the upcoming international airport.
                </p>
              </div>
              <div className="space-y-4">
                {benefits.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-900/80 p-5">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-3xl font-bold text-white">Our investment process</h2>
            <p className="mt-4 text-slate-300">
              We simplify purchase, paperwork, and handover so investors can move confidently from booking to possession.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {process.map((step) => (
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
