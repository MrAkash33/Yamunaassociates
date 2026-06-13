export default function ContactCTA() {
  return (
    <section className="bg-amber-400 py-24 px-6 text-slate-950 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950/95 p-10 text-white shadow-xl shadow-black/20">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Get in touch</p>
            <h2 className="mt-4 text-4xl font-bold">Ready to book your site visit?</h2>
            <p className="mt-4 text-slate-300">Contact our team today and we will arrange a guided visit to the best plots and properties in the Yamuna corridor.</p>
          </div>
          <div className="space-y-4">
            <p className="text-slate-200">📞 +91 90910 10909</p>
            <p className="text-slate-200">📧 info@yamunaassociates.com</p>
            <button className="rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-950">Book a Visit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
