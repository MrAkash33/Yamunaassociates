export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 px-6 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Testimonials</p>
          <h2 className="mt-4 text-4xl font-bold">What clients say about working with us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">Real feedback from buyers and investors who found their ideal plot or project through Yamuna Associations.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <p className="text-slate-300">“The team made the plot booking process simple and transparent. We appreciated the site visit coordination and quick legal checks.”</p>
            <p className="mt-6 font-semibold text-white">— Rohit K.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <p className="text-slate-300">“From documentation to the final handover, everything was handled professionally. Great support for first-time buyers.”</p>
            <p className="mt-6 font-semibold text-white">— Priya S.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <p className="text-slate-300">“We got the best location recommendation on the Yamuna Expressway. The investment case was clearly explained.”</p>
            <p className="mt-6 font-semibold text-white">— Sanjay M.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
