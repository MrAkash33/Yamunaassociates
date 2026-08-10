export const metadata = {
  title: "Blogs | Yamuna Associations",
};

const blogPosts = [
  {
    title: "Why Yamuna Expressway plots are attracting buyers",
    excerpt: "A closer look at rapid infrastructure growth, airport access, and future city planning in the region.",
    date: "12 June 2026",
    category: "Investment",
  },
  {
    title: "How to compare plots by facing and size",
    excerpt: "A practical guide to choosing plots with the best long-term resale and rental potential.",
    date: "05 June 2026",
    category: "Guide",
  },
  {
    title: "Checklist for clean land titles",
    excerpt: "Understand the key documents and approvals every buyer should verify before booking.",
    date: "28 May 2026",
    category: "Legal",
  },
];

const topics = [
  {
    title: "Investment advice",
    detail: "Market outlook, expected appreciation, and rental demand for Yamuna Expressway area.",
  },
  {
    title: "Plot comparison",
    detail: "How to evaluate size, location, and planned access roads before choosing a parcel.",
  },
  {
    title: "Legal preparation",
    detail: "Documentation checks that reduce risk and make the purchase process smoother.",
  },
];

export default function BlogsPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_40%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Blog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Insights for buyers, investors, and first-time plot purchasers</h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">Read our latest updates on land investment, local planning changes, and how to choose the best property.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-400">{post.category}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">{post.title}</h2>
                  <p className="mt-4 text-slate-300">{post.excerpt}</p>
                </div>
                <p className="text-sm text-slate-400">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic.title} className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-2xl font-semibold text-white">{topic.title}</h3>
              <p className="mt-4 text-slate-300">{topic.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold text-white">Service area coverage</h2>
          <p className="mt-4 text-slate-300">Our content covers projects and plots across Greater Noida, Yamuna Expressway, and Alpha sectors.</p>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <iframe
              src="https://maps.google.com/maps?q=greater%20noida%20yamuna%20expressway&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              title="Blog service coverage map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
