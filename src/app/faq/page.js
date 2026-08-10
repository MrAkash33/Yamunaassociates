export const metadata = {
  title: "FAQ | Yamuna Associations",
};

const faqs = [
  {
    question: "How do I book a site visit?",
    answer: "Click Book Site Visit on the navbar or contact us directly. We will arrange a guided visit to the selected plot or project within 24 hours.",
  },
  {
    question: "What documents are required for a plot purchase?",
    answer: "We typically require identity proof, address proof, PAN, and the initial token deposit. The complete checklist is shared with every buyer before booking.",
  },
  {
    question: "Can I see a plot layout before booking?",
    answer: "Yes. We provide layout plans, sector maps, and actual location references during the site visit or via digital pack.",
  },
  {
    question: "Are the plots approved by local authorities?",
    answer: "Yes. All available plots are cleared with approved land titles and local approvals. Our legal team handles verification and documentation.",
  },
];

const supportInfo = [
  {
    title: "Booking support",
    text: "A dedicated relationship manager guides you through site visits, price negotiations, and payment terms.",
  },
  {
    title: "Legal assistance",
    text: "Our experts review title documents, land approvals, and agreements before you sign.",
  },
  {
    title: "Post-booking follow-up",
    text: "We keep you updated with regular progress reports, approvals, and possession timelines.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_40%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">FAQ</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Frequently asked questions for homebuyers and investors</h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">Answers to the most common queries about plots, approvals, site visits, and documentation.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
              <summary className="cursor-pointer text-xl font-semibold text-white">{faq.question}</summary>
              <p className="mt-4 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
          {supportInfo.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold text-white">Our office & site map</h2>
          <p className="mt-4 text-slate-300">We are centrally located to coordinate visits and documentation for Greater Noida and Yamuna Expressway buyers.</p>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <iframe
              src="https://maps.google.com/maps?q=greater%20noida%20sector%2011&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              title="FAQ office location map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
