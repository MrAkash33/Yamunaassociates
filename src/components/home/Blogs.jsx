export default function Blogs() {
  return (
    <section className="bg-slate-900 py-24 px-6 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Latest Articles</p>
          <h2 className="mt-4 text-4xl font-bold">Helpful guides for property buyers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">Read our latest content on buying plots, evaluating locations, and understanding approvals.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Investing in Yamuna Expressway</h3>
            <p className="mt-4 text-slate-300">Why this corridor is one of the fastest appreciating land markets today.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">What to check before booking a plot</h3>
            <p className="mt-4 text-slate-300">A quick checklist for approvals, facing, and connectivity before you sign.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Legal documents every buyer needs</h3>
            <p className="mt-4 text-slate-300">Understand the key paperwork required for a secure plot purchase.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
