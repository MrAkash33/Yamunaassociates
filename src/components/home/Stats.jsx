"use client";
import { useState , useEffect } from "react";
import { ChevronDown } from "lucide-react";
const stats = [
  {
    number: "15+",
    title: "Years Experience",
  },
  {
    number: "5000+",
    title: "Happy Clients",
  },
  {
    number: "1200+",
    title: "Plots Sold",
  },
  {
    number: "98%",
    title: "Satisfaction",
  },
];
const projects = [
  {
    title: "Sector 18 Residential Plots",
    description:
      "Plots available near Jewar Airport with clear titles and modern infrastructure.",
    plotSize: "60 - 300 sq.m",
    price: "₹75 Lakh - ₹2.50 Cr",
    airport: "15 km",
    connectivity: "Direct Yamuna Expressway Access",
    infrastructure: "Power, Water, Sewage",
    nearby: "Schools, Hospitals, Mall",
    highlights: [
      "YEIDA Approved",
      "Clear Land Title",
      "Near Jewar Airport",
      "60-100m Wide Roads",
      "Green Parks",
      "15-20% ROI Potential",
    ],
  },

  {
    title: "Sector 20 Residential Plots",
    description:
      "Affordable residential plots approved by YEIDA.",
    plotSize: "300 - 500 sq.m",
    price: "₹1.85 Cr - ₹3.50 Cr",
    airport: "18 km",
    connectivity: "Yamuna Expressway + Metro Proposed",
    infrastructure: "Underground Utilities",
    nearby: "Schools, Medical Centers",
    highlights: [
      "Future Metro Connectivity",
      "High Appreciation Zone",
      "Secure Investment",
      "Premium Location",
    ],
  },

  {
    title: "Sector 22D Residential Plots",
    description:
      "Upcoming residential development with strong growth potential.",
    plotSize: "120 - 162 sq.m",
    price: "₹1.10 Cr - ₹1.50 Cr",
    airport: "17 km",
    connectivity: "Expressway Connectivity",
    infrastructure: "Modern Infrastructure",
    nearby: "Shopping Complexes",
    highlights: [
      "Near Upcoming Developments",
      "Wide Roads",
      "Excellent Connectivity",
      "Investment Friendly",
    ],
  },

  {
    title: "Sector 16 Residential Plots",
    description:
      "Modern residential plots planned for upcoming enterprises.",
    plotSize: "120 ,162 ,200 ,300 sq.m",
    price: "₹1.05,₹1.55,₹1.65, ₹2 Cr",
    airport: "20 km",
    connectivity: "Expressway Corridor",
    infrastructure: "Smart Utilities",
    nearby: "Educational Institutes",
    highlights: [
      "Planned Township",
      "Future Growth Corridor",
      "Wide Green Belt",
    ],
  },

  {
    title: "Sector 17 Residential Plots",
    description:
      "Dedicated residential area approved by YEIDA.",
    plotSize: "120 , 162 , 200 sq.m",
    price: "₹1.05 Cr , 1.55 Cr ,  ₹1.65 Cr",
    airport: "19 km",
    connectivity: "Direct Road Network",
    infrastructure: "Water & Electricity",
    nearby: "Hospitals & Markets",
    highlights: [
      "YEIDA Registered",
      "Good Rental Potential",
      "Safe Investment",
    ],
  },

  {
    title: "Sector 25 Semi Residential Plots",
    description:
      "Versatile semi-residential plots perfect for mixed-use development.",
    plotSize: "150 - 600 sq.m",
    price: "₹1 Cr - ₹4 Cr",
    airport: "16 km",
    connectivity: "Expressway Frontage",
    infrastructure: "Premium Infrastructure",
    nearby: "Commercial Hubs",
    highlights: [
      "Mixed Use Development",
      "Commercial Potential",
      "Premium Location",
      "High ROI",
    ],
  },
];

const videos = [
  {
    title: "Sector 20 YEIDA | Pocket L | 100m Road Facing Plot",
    thumbnail: "https://img.youtube.com/vi/AriyCYS3T5E/hqdefault.jpg",
    url: "https://youtu.be/AriyCYS3T5E",
    description:
      "Lowest price plot deal in YEIDA Sector 20 with 100m road connectivity.",
  },
  {
    title: "YEIDA Upcoming Plot Scheme Eligibility",
    thumbnail: "https://img.youtube.com/vi/pdOSaV1I9X4/hqdefault.jpg",
    url: "https://youtu.be/pdOSaV1I9X4",
    description:
      "Who can apply for the upcoming YEIDA scheme and what investors should know.",
  },
  {
    title: "Most Demanded Pocket U | Sector 20",
    thumbnail: "https://img.youtube.com/vi/3VErX6ryvcE/hqdefault.jpg",
    url: "https://youtu.be/3VErX6ryvcE",
    description:
      "500 sqm premium plot in one of the highest demand pockets of YEIDA.",
  },
];

const newsData = [
  {
    id: 1,
    title: "Passenger Facilities Trial Conducted at Yamuna International Airport",
    date: "16 Dec 2025",
    category: "Airport Update",
    image:
      "https://res.cloudinary.com/dfigx6dgg/image/upload/v1765864298/skd_gallery/hsw4d2qchklhzsxcfokl.jpg",
    short:
      "A passenger facilities trial was recently conducted at Yamuna International Airport.",
    content: `
      A passenger facilities trial was recently conducted at Yamuna International Airport
      to evaluate terminal operations, security procedures, passenger movement,
      baggage handling, and overall airport readiness.

      The trial involved testing check-in counters, security checkpoints,
      boarding procedures, and terminal navigation.

      Airport authorities confirmed that these exercises are essential before
      commercial operations begin. The airport is expected to become one of
      India's largest aviation hubs and will significantly boost investment,
      tourism, employment, and real estate development across the YEIDA region.
    `,
  },

  {
    id: 2,
    title:
      "International Commercial Flights to Begin One Month After Local Flights at Noida Airport",
    date: "8 Dec 2025",
    category: "YEIDA Updates",
    image: "https://i.postimg.cc/MZjRcw3V/yeida25.jpg",
    short:
      "International commercial flights from Noida International Airport are expected soon.",
    content: `
      Noida International Airport (Jewar) is set to begin operations in phases.

      Domestic flights are expected to commence first after receiving
      DGCA approvals and Aerodrome Licensing.

      International commercial flights are planned to begin approximately
      one month after domestic services start.

      Discussions are already underway with major airlines including
      IndiGo, Akasa Air, and Air India Express.

      The airport is expected to reduce pressure on Delhi Airport,
      improve global connectivity, and accelerate economic growth
      throughout Western Uttar Pradesh and the YEIDA region.
    `,
  },

  {
    id: 3,
    title:
      "Preparations Accelerate for Noida International Airport Inauguration",
    date: "6 Dec 2025",
    category: "Airport News",
    image: "https://i.postimg.cc/25cvNFx5/yeida22.jpg",
    short:
      "Preparations for the inauguration of Noida International Airport are underway.",
    content: `
      Preparations for the inauguration of Noida International Airport
      have entered the final stage.

      Security arrangements, visitor facilities, terminal seating,
      landscaping, and transportation systems are being finalized.

      Authorities are ensuring that all passenger services and
      operational systems meet international standards before launch.

      The airport is expected to become a major catalyst for
      infrastructure and real estate growth in Greater Noida and YEIDA.
    `,
  },

  {
    id: 4,
    title:
      "Education City to Take Shape in Yamuna City: Global Institutions Request Land Allocation",
    date: "26 Nov 2025",
    category: "Education City",
    image:
      "https://res.cloudinary.com/dfigx6dgg/image/upload/v1764157096/skd_gallery/gxrwqagnzvyvi2rsuwub.png",
    short:
      "A global-standard Education City is coming to the Yamuna Expressway Region.",
    content: `
      Several leading educational institutions have applied for land
      allocation within YEIDA's proposed Education City.

      The project aims to create a world-class education hub featuring
      universities, research centers, international schools, and
      skill-development institutes.

      This development is expected to attract students,
      professionals, and businesses, increasing property demand
      throughout the region.
    `,
  },

  {
    id: 5,
    title: "Jewar Airport Ready for Takeoff ✈️",
    date: "26 Nov 2025",
    category: "Airport Update",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqD6mDj1jskkxctwGVTuJiXEOxXPCbeifzQA&s",
    short:
      "Noida International Airport has successfully completed final inspections.",
    content: `
      Noida International Airport (Jewar) has successfully completed
      final security inspections and operational testing.

      Airport infrastructure including runways, terminals,
      navigation systems, and passenger facilities is now ready.

      Final regulatory approvals remain pending before
      commercial flight operations officially commence.

      The airport is expected to transform the YEIDA region into
      one of India's fastest-growing investment corridors.
    `,
  },
];

export default function Stats() {
   const [active, setActive] = useState(null);
   const [selectedNews, setSelectedNews] = useState(null);

  const toggleProject = (index) => {
    setActive(active === index ? null : index);
  };

  useEffect(() => {
  if (selectedNews) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedNews]);
  return (
    <>
    <section className="-mt-24 relative z-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-yellow-400">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    {/* ----------- */}
    <section className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl">

          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Property expertise you can count on
          </h2>

          <div className="space-y-6 text-base leading-8 text-slate-600 md:text-lg">

            <p>
              <span className="font-semibold text-slate-900">
                Yamuna Associates
              </span>{" "}
              is a trusted real estate consultant in Greater Noida,
              helping buyers and investors make informed decisions in
              residential and commercial property markets. We specialize
              in YEIDA-approved plots, premium land investments, and
              future-ready developments.
            </p>

            <p>
              Our team provides professional property consultation,
              investment guidance, site visits, documentation support,
              and end-to-end assistance for clients looking to invest in
              Greater Noida and YEIDA regions.
            </p>

            <p>
              Whether you're a first-time buyer or an experienced
              investor, we help you identify high-growth opportunities
              with transparency, market expertise, and personalized
              service.
            </p>

          </div>

          <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center">

            <p className="text-lg font-semibold text-slate-900 md:text-xl">
              Trusted by clients as one of the leading real estate
              consultants in Greater Noida & YEIDA for residential and
              commercial investments.
            </p>

          </div>

        </div>

      </div>
    </section>
{/* ------- */}
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Featured Investment Zones
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            YEIDA Project Highlights
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Explore premium residential and semi-residential opportunities
            across YEIDA sectors with excellent future growth potential.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleProject(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {project.description}
                  </p>
                </div>

                <ChevronDown
                  className={`h-6 w-6 text-yellow-500 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index
                    ? "max-h-96 border-t border-slate-100"
                    : "max-h-0"
                }`}
              >
                <div className="p-6 bg-slate-50">
                  <p className="text-slate-700 leading-7">
                    {project.details}
                  </p>
                  <p>🏗️ Plot Size: {project.plotSize}</p>
                  <p>💰 Price: {project.price}</p>
                    <p>✈️ Airport Distance: {project.airport}</p>
                    <p>🛣️ Connectivity: {project.connectivity}</p>
                    <p>⚡ Infrastructure: {project.infrastructure}</p>
                    <p>🏫 Nearby: {project.nearby}</p>

                  <button className="mt-5 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ---------- */}

    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Why Choose Yamuna Associates.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
             Finding the right property starts with trust. At Yamuna Associates, we deliver honest advice, verified listings, and a seamless buying experience.
          </p>

        </div>

        {/* Features */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">✔️</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              100% Legal & Approved
            </h3>

            <p className="leading-7 text-slate-600">
              Every property undergoes strict title checks, ownership verification, and regulatory clearance.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">📍</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              The Hyper-Local Experts
            </h3>

            <p className="leading-7 text-slate-600">
              Decades of on-ground experience across Greater Noida, YEIDA, and the Yamuna Expressway.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">🔍</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              100% Clear Pricing
            </h3>

            <p className="leading-7 text-slate-600">
              Honest advice, upfront costs, and zero hidden fees.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">🤝</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              End-to-End Assistance
            </h3>

            <p className="leading-7 text-slate-600">
              Complete support from site visits and paperwork
              to registry and post-sale services.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">📈</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Investment-Focused Guidance
            </h3>

            <p className="leading-7 text-slate-600">
              Recommendations based on future appreciation,
              ROI potential, and long-term value.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">👨‍💼</div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Professional & Ethical Team
            </h3>

            <p className="leading-7 text-slate-600">
              Dedicated professionals delivering responsive,
              accountable, and client-first service.
            </p>
          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-10 text-center shadow-xl">

          <h3 className="text-2xl font-bold text-black">
            🤝 Built on Trust, Transparency & Long-Term Relationships
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-black/80">
            Contact Yamuna Associates today for site visits,
            pricing information, property consultation,
            and complete documentation support.
          </p>

          {/* <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
              Contact Us Today
            </button>

            <button className="rounded-xl border border-black px-8 py-4 font-semibold text-black transition hover:bg-black hover:text-white">
              Schedule Site Visit
            </button>

          </div> */}

        </div>

      </div>
    </section>

    {/* ------- */}

    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Content */}

        <div className="mx-auto max-w-5xl text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Trusted Property Consultant
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              End-to-End Property Solutions in Greater Noida
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
             End-to-End Property Solutions in Greater Noida At Yamuna Associates, we don't just find you a property—we secure your investment. Our team provides verified property options, clear consultation, and complete support with documentation and registration across Greater Noida and the YEIDA regions.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our experienced real estate consultants help clients make
            informed investment decisions with verified property options
            across Greater Noida and YEIDA regions.
          </p>

        </div>

        {/* Why Invest Section */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              Investment Opportunity
            </span>

            <h3 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Why Invest in YEIDA?
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              The Yamuna Expressway Industrial Development Authority (YEIDA) region has rapidly emerged as Delhi-NCR’s premier high-growth real estate corridor, offering unmatched long-term investment potential near Greater Noida. Strategically positioned along the Yamuna Expressway, the region provides seamless connectivity to Noida, Greater Noida, and Agra, while being directly anchored by major economic drivers like the upcoming Noida International Airport at Jewar, the mega Film City, industrial corridors, and modern smart townships. Capitalizing on this massive growth requires trusted, on-ground expertise, which is where Yamuna Associates steps in. We simplify your investment journey by leveraging deep local insights to identify authority-approved, fully verified plots, ensuring a secure, profitable, and entirely transparent buying experience from site visit to final registration.
            </p>
          </div>

          {/* Highlights Cards */}

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl">✈️</div>
              <h4 className="mt-4 font-bold text-slate-900">
                Jewar Airport
              </h4>
              <p className="mt-2 text-slate-600">
                Near Noida International Airport growth corridor.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl">🎬</div>
              <h4 className="mt-4 font-bold text-slate-900">
                Film City
              </h4>
              <p className="mt-2 text-slate-600">
                Upcoming Film City boosting property demand.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl">📈</div>
              <h4 className="mt-4 font-bold text-slate-900">
                High ROI
              </h4>
              <p className="mt-2 text-slate-600">
                Excellent appreciation potential for investors.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl">🛣️</div>
              <h4 className="mt-4 font-bold text-slate-900">
                Connectivity
              </h4>
              <p className="mt-2 text-slate-600">
                Direct access to Yamuna Expressway and NCR.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-10 text-center">

          <h3 className="text-3xl font-bold text-black">
            Looking for the Right Property Investment?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-black/80">
            Connect with Yamuna Associates for verified properties,
            investment consultation, site visits, and complete
            documentation support.
          </p>

          {/* <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-xl bg-black px-8 py-4 font-semibold text-white">
              Contact Us
            </button>

            <button className="rounded-xl border border-black px-8 py-4 font-semibold text-black">
              Schedule Site Visit
            </button>

          </div> */}

        </div>

      </div>
    </section>

    {/* ----------- */}
    {/* <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

          <div className="lg:col-span-4">

            <div className="sticky top-24">

              <div className="mb-4 text-5xl">🎥</div>

              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">
                YouTube Series
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                Unlocking
                <span className="text-red-600"> Real Estate</span>
              </h2>

              <p className="mt-4 text-lg text-slate-600">
                A show that helps you invest wisely through real stories,
                expert insights, market trends, and investment opportunities.
              </p>

              <p className="mt-4 text-slate-500">
                Your property journey starts here with practical knowledge
                from the world of real estate.
              </p>

              <a
                href="https://www.youtube.com/channel/UCBqqQkxHtycbgChxmW_JwAA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Visit YouTube Channel →
              </a>

            </div>

          </div>

          <div className="lg:col-span-8">

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

              {videos.map((video, index) => (
                <div
                  key={index}
                  className="min-w-[320px] overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="relative">

                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-52 w-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl text-red-600">
                        ▶
                      </div>
                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
                      {video.title}
                    </h3>

                    <p className="mt-3 line-clamp-4 text-sm text-slate-600">
                      {video.description}
                    </p>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block text-red-600 font-semibold"
                    >
                      Watch Video →
                    </a>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section> */}

    {/* -------------- */}
    <section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="mb-16 text-center">

      <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
        Leadership Team
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
        Meet Our Leadership Team
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        Experienced professionals driving growth, transparency,
        and trusted real estate solutions across Greater Noida,
        YEIDA, and Yamuna Expressway regions.
      </p>

    </div>

    {/* Team Cards */}

    {/* <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex justify-center">
          <img
            src="/md.jpeg.jpg"
            alt="Er. Pawan Mishra"
            className="h-40 w-40 rounded-full object-cover ring-4 ring-yellow-100"
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Er. Pawan Mishra
        </h3>

        <p className="mt-2 font-semibold text-yellow-600">
          Managing Director
        </p>

        <p className="mt-5 leading-7 text-slate-600">
          Strategic vision and market expansion with a strong focus
          on client-centric investment solutions, transparent
          property dealings, and long-term value creation.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="https://www.linkedin.com/in/erpawankumarmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="/team#pawan-sir"
          className="mt-6 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-500"
        >
          View Profile
        </a>

      </div>

      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex justify-center">
          <img
            src="/DirMamShort.jpg"
            alt="Mrs. Aarti Mishra"
            className="h-40 w-40 rounded-full object-cover ring-4 ring-yellow-100"
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Mrs. Aarti Mishra
        </h3>

        <p className="mt-2 font-semibold text-yellow-600">
          Director
        </p>

        <p className="mt-5 leading-7 text-slate-600">
          Strategic leadership and vision planning with a strong
          emphasis on client relationships, ethical governance,
          and sustainable business growth.
        </p>

        <a
          href="/team#aarti-mam"
          className="mt-10 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-500"
        >
          View Profile
        </a>

      </div>

    </div> */}

  </div>
    </section>

<section className="bg-slate-50 py-20">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="text-center">

      <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
        Prime Investment Zones
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
        Prime Real Estate Locations We Serve
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
        Yamuna Associates is among the leading real estate consultants in
        Greater Noida and YEIDA, helping investors and homebuyers
        discover verified residential, commercial, and investment
        opportunities with complete assistance.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">

      {/* YEIDA */}

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
          🏗️
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          YEIDA Plots
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Explore authority-approved residential, commercial,
          and investment plots across the Yamuna Expressway
          Industrial Development Authority region.
        </p>

        <ul className="mt-6 space-y-3 text-slate-700">

          <li>✅ Authority Approved Plots</li>

          <li>✅ Near Jewar International Airport</li>

          <li>✅ High Appreciation Potential</li>

          <li>✅ Residential & Commercial Options</li>

        </ul>

        <button className="mt-8 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-500">
          Explore YEIDA Projects
        </button>

      </div>

      {/* Greater Noida */}

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
          🏢
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Greater Noida Properties
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Premium residential and commercial properties located
          in some of the fastest-growing sectors of Greater Noida.
        </p>

        <ul className="mt-6 space-y-3 text-slate-700">

          <li>✅ Residential Apartments</li>

          <li>✅ Commercial Spaces</li>

          <li>✅ Investment Opportunities</li>

          <li>✅ Verified Property Listings</li>

        </ul>

        <button className="mt-8 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-500">
          Explore Properties
        </button>

      </div>

    </div>

    {/* Bottom Content */}

    <div className="mx-auto mt-16 max-w-4xl text-center">

      <p className="text-lg leading-8 text-slate-600">
        Looking for trusted real estate experts in Greater Noida or
        YEIDA? Connect with Yamuna Associates for verified property
        options, site visits, pricing assistance, legal guidance,
        and complete documentation support.
      </p>

      {/* <div className="mt-8 flex flex-wrap justify-center gap-4">

        <button className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
          Contact Us
        </button>

        <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
          Schedule Site Visit
        </button>

      </div> */}

    </div>

  </div>
</section>

{/* ---------------- */}
<section className="bg-[#0f172a] py-20">
  <div className="mx-auto max-w-7xl px-6">

    <h5 className="text-center text-yellow-400 font-medium">
      Customer Testimonials
    </h5>

    <h2 className="mt-3 text-center text-4xl font-bold text-white">
      Trusted by People Like You
    </h2>

    <div className="mt-12 overflow-x-auto">
      <div className="flex gap-8 pb-4">

        {/* Card 1 */}

        <div className="min-w-[350px] rounded-3xl bg-white p-6 shadow-lg">

          <div className="mb-4 flex items-center gap-3">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              className="h-8 w-8"
            />

            <span className="text-sm font-medium text-slate-600">
              Verified Google Review
            </span>
          </div>

          <div className="mb-4 text-yellow-400 text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <h4 className="font-bold text-slate-900">
            Amazing Experience
          </h4>

          <p className="mt-3 italic text-slate-600">
            "Amazing experience. They are both supportive and positive
            environment all around us for real estate in Greater Noida."
          </p>

          <p className="mt-5 font-semibold text-green-600">
            Jyoti Singh
          </p>

          <p className="text-sm text-slate-400">
            15 days ago
          </p>

        </div>

        {/* Card 2 */}

        <div className="min-w-[350px] rounded-3xl bg-white p-6 shadow-lg">

          <div className="mb-4 flex items-center gap-3">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              className="h-8 w-8"
            />

            <span className="text-sm font-medium text-slate-600">
              Verified Google Review
            </span>
          </div>

          <div className="mb-4 text-yellow-400 text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <h4 className="font-bold text-slate-900">
            Excellent Service & Quality
          </h4>

          <p className="mt-3 italic text-slate-600">
            "The team is highly professional, knowledgeable and committed
            to delivering the best service."
          </p>

          <p className="mt-5 font-semibold text-green-600">
            Aman Kumar
          </p>

          <p className="text-sm text-slate-400">
            About 1 day ago
          </p>

        </div>

        {/* Card 3 */}

        <div className="min-w-[350px] rounded-3xl bg-white p-6 shadow-lg">

          <div className="mb-4 flex items-center gap-3">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              className="h-8 w-8"
            />

            <span className="text-sm font-medium text-slate-600">
              Verified Google Review
            </span>
          </div>

          <div className="mb-4 text-yellow-400 text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <h4 className="font-bold text-slate-900">
            Efficient Support
          </h4>

          <p className="mt-3 italic text-slate-600">
            "Experts in Yamuna Expressway Authority plots.
            Gives great deals."
          </p>

          <p className="mt-5 font-semibold text-green-600">
            Amit Gaur
          </p>

          <p className="text-sm text-slate-400">
            3 months ago
          </p>

        </div>

      </div>
    </div>

  </div>
</section>

{/* --------------------- */}
<section className="relative bg-slate-900 py-20">
  <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

  <div className="relative mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <span className="rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
        Our Achievements
      </span>

      <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
        Numbers That Speak For Us
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-slate-300">
        Building trust through successful transactions, satisfied clients,
        and years of real estate expertise across Greater Noida & YEIDA.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

      {/* Projects */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:-translate-y-2 hover:border-yellow-400/30">

        <div className="mb-4 text-5xl">🏗️</div>

        <h3 className="text-4xl font-bold text-yellow-400">
          3000+
        </h3>

        <p className="mt-2 text-slate-300">
          Projects Completed
        </p>

      </div>

      {/* Clients */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:-translate-y-2 hover:border-yellow-400/30">

        <div className="mb-4 text-5xl">😊</div>

        <h3 className="text-4xl font-bold text-yellow-400">
          3500+
        </h3>

        <p className="mt-2 text-slate-300">
          Happy Clients
        </p>

      </div>

      {/* Experience */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:-translate-y-2 hover:border-yellow-400/30">

        <div className="mb-4 text-5xl">🏆</div>

        <h3 className="text-4xl font-bold text-yellow-400">
          15+
        </h3>

        <p className="mt-2 text-slate-300">
          Years Experience
        </p>

      </div>

      {/* Support */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:-translate-y-2 hover:border-yellow-400/30">

        <div className="mb-4 text-5xl">🎧</div>

        <h3 className="text-4xl font-bold text-yellow-400">
          24×7
        </h3>

        <p className="mt-2 text-slate-300">
          Customer Support
        </p>

      </div>

    </div>

  </div>
</section>

{/* ------------------ */}
<section className="relative py-20" style={{padding:"80px"}}>
     <div className="mb-16 text-center">
      <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl" style={{color:"black"}}>
              Latest YEIDA News & Updates
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-slate-300">
        Stay updated with the latest developments in YEIDA region
      </p>
    </div>
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {newsData.map((news) => (
      <div
        key={news.id}
        className="overflow-hidden rounded-3xl bg-white shadow-lg"
      >
        <img
          src={news.image}
          alt={news.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="font-bold text-xl">
            {news.title}
          </h3>

          <p className="mt-3 text-slate-600">
            {news.short}
          </p>

          <button
            onClick={() => setSelectedNews(news)}
            className="mt-5 rounded-xl border border-blue-500 px-5 py-3 text-blue-600"
          >
            Read More
          </button>
        </div>
      </div>
    ))}
  </div>
  {selectedNews && (
    <div className="fixed inset-0 z-[9999]">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setSelectedNews(null)}
      />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">

        <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

          <div className="flex items-center justify-between border-b p-6">
            <h2 className="text-2xl font-bold">
              {selectedNews.title}
            </h2>

            <button
              onClick={() => setSelectedNews(null)}
              className="text-3xl"
            >
              ×
            </button>
          </div>

          <div className="p-6">

            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="mb-6 h-[400px] w-full rounded-2xl object-cover"
            />

            <div className="mb-6 flex gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2">
                📅 {selectedNews.date}
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                {selectedNews.category}
              </span>
            </div>

            <p className="leading-8 text-slate-700">
              {selectedNews.content}
            </p>

          </div>

        </div>

      </div>

    </div>
  )}
</section>

{/* --------------------- */}

<section className="mt-10 bg-slate-100 py-16">
  <div className="mx-auto max-w-6xl px-6">

    <h2 className="mb-6 text-center text-4xl font-bold text-slate-800 md:text-5xl">
      Professional Real Estate Consultant for YEIDA
    </h2>

    <p className="mx-auto mb-6 max-w-4xl text-center text-lg leading-8 text-slate-600">
      Yamuna Associates acts as a trusted real estate consultant for
      YEIDA and Greater Noida, helping buyers, NRI investors, and
      end-users understand location advantages, legal compliance,
      and future growth potential of every property. Our extensive
      market knowledge ensures confident and well-informed investment
      decisions.
    </p>

    <div className="mx-auto max-w-4xl text-center">

      <p className="mb-4 text-base leading-8 text-slate-600">

        Learn more about our commitment to providing exceptional
        real estate services in Greater Noida and the Yamuna
        Expressway region through our

        <a
          href="/about-us"
          className="mx-1 border-b-2 border-yellow-400 font-semibold text-yellow-500 transition hover:text-yellow-600"
        >
          About Us
        </a>

        page. For common questions regarding our services and
        property investments, visit our

        <a
          href="/faq"
          className="ml-1 border-b-2 border-yellow-400 font-semibold text-yellow-500 transition hover:text-yellow-600"
        >
          FAQ Page
        </a>

        .
      </p>

      <p className="text-base leading-8 text-slate-600">

        We provide professional

        <a
          href="/services"
          className="mx-1 border-b-2 border-yellow-400 font-semibold text-yellow-500 transition hover:text-yellow-600"
        >
          Real Estate Consultation Services
        </a>

        for buyers, investors, and businesses looking for
        opportunities in Greater Noida, YEIDA, and the Yamuna
        Expressway corridor.

      </p>

    </div>

  </div>
</section>

{/* ----------------------- */}

<section className="relative overflow-hidden bg-slate-900 py-20">

  {/* Background Glow */}

  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>

  <div className="relative mx-auto max-w-6xl px-6">

    <div className="mb-12 text-center">

      <span className="rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
        Stay Connected
      </span>

      <h2 className="mt-5 text-4xl font-bold uppercase text-white md:text-5xl">
        Stay Updated. Be The First To Know
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
        Get exclusive property updates, investment opportunities,
        YEIDA news, market insights, and VIP reports to help you
        make smarter real estate decisions.
      </p>

    </div>

    {/* <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

      <form className="grid gap-6 md:grid-cols-2">

        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <select
            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white focus:border-yellow-400 focus:outline-none"
          >
            <option className="text-black">
              Select Property Type
            </option>

            <option className="text-black">
              Residential
            </option>

            <option className="text-black">
              Commercial
            </option>

            <option className="text-black">
              Industrial
            </option>

            <option className="text-black">
              Investment Plot
            </option>
          </select>
        </div>

        <div className="md:col-span-2">
          <textarea
            rows={5}
            placeholder="Tell us about your property requirements..."
            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2 text-center">

          <button
            type="submit"
            className="rounded-xl bg-yellow-400 px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
          >
            Submit Inquiry
          </button>

        </div>

      </form>

    </div> */}

  </div>

</section>
    </>
  );
}