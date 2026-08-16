export const metadata = {
  title: "About Us | Yamuna Associations",
};

const values = [
  "Transparent pricing with no hidden costs.",
  "Fast approvals supported by verified documentation.",
  "Customer-first planning from booking to possession.",
];

const team = [
  { name: "Dinesh chauhan", role: "Founder & CEO" },
  { name: "Reenuka Thakur", role: "Operations Head" },
  // { name: "Dinesh Chauhan", role: "Sales Director" },
];

const milestones = [
  { year: "2018", text: "Founded Yamuna Associates with a focus on land and plot advisory." },
  { year: "2021", text: "Delivered over 450 residential and commercial plots across Greater Noida." },
  { year: "2024", text: "Expanded services to include legal clearance and loan assistance." },
];

export default function AboutUsPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_40%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">About us</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">A trusted real estate partner for Yamuna Expressway and Greater Noida buyers</h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">Yamuna Associations brings experience, verified approvals, and customer-first support to every plot, project, and property purchase.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-3xl font-bold text-white">Our values</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {values.map((value) => (
                <li key={value} className="rounded-3xl bg-slate-900/80 p-5">{value}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-3xl font-bold text-white">Leadership team</h2>
            <dl className="mt-6 space-y-4 text-slate-300">
              {team.map((member) => (
                <div key={member.name} className="rounded-3xl bg-slate-950/60 p-5">
                  <dt className="text-lg font-semibold text-white">{member.name}</dt>
                  <dd className="mt-1">{member.role}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold text-white">Milestones</h2>
          <div className="mt-8 space-y-4">
            {milestones.map((item) => (
              <div key={item.year} className="rounded-3xl bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-400">{item.year}</p>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold text-white">Where we operate</h2>
          <p className="mt-4 text-slate-300">We serve buyers and investors across Greater Noida West, Yamuna Expressway, Alpha sectors, and nearby commercial corridors.</p>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <iframe
              src="https://maps.google.com/maps?q=greater%20noida%20west&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              title="About us location map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
