export default function FeaturedProjects() {
  return (
    <section className="bg-slate-950 py-24 px-6 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Featured Projects</p>
          <h2 className="mt-4 text-4xl font-bold">Handpicked residential and commercial investments</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">Our current projects combine premium location, strong approvals, and smart design across Greater Noida and Yamuna Expressway.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Yamuna Heights</h3>
            <p className="mt-3 text-slate-300">Luxury 2 & 3 BHK apartments in a gated community with clubhouse, jogging track, and landscaped greens.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Near Metro station and school zone</li>
              <li>• Ready to occupy by Q4 2026</li>
              <li>• Starting at ₹58 Lakh</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Expressway Commercial Hub</h3>
            <p className="mt-3 text-slate-300">High-visibility retail and office spaces positioned on the Yamuna Expressway for rental and resale demand.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Multiple floor plans available</li>
              <li>• Strong footfall corridor</li>
              <li>• Starting at ₹1.1 Crore</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Green Valley Residences</h3>
            <p className="mt-3 text-slate-300">Spacious 3 & 4 BHK apartments with premium amenities and direct connectivity to the upcoming airport corridor.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Clubhouse and gym included</li>
              <li>• Nearby educational campus</li>
              <li>• Starting at ₹92 Lakh</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
