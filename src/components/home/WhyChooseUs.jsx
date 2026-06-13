export default function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-24 px-6 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Why Choose Us</p>
          <h2 className="mt-4 text-4xl font-bold">A partner built for fast, secure property decisions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">We provide verified approvals, clear pricing, and local expertise so you can invest with confidence.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Verified approvals</h3>
            <p className="mt-4 text-slate-300">All plots and projects are supported by official land records and approval documentation.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Easy site visits</h3>
            <p className="mt-4 text-slate-300">Schedule guided visits to plots and projects with our team across Greater Noida and the Yamuna Expressway.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Customer-first support</h3>
            <p className="mt-4 text-slate-300">From financing help to final possession, we keep you informed at every step.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
