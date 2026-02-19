"use client";

import { Phone, Mail, Hammer } from "lucide-react";

export default function Page() {
  return (
    <>
 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NUVI Welding & Fabrication LLC",
            image: "https://nuviwelding.com/og-image.png",
            telephone: "+1-469-845-5728",
            email: "nuvicteam@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dallas",
              addressRegion: "TX",
              addressCountry: "US",
            },
            areaServed: [
              "Dallas TX",
              "Fort Worth TX",
              "Arlington TX",
              "Plano TX",
              "Frisco TX",
              "Irving TX",
              "Garland TX",
              "McKinney TX",
            ],
            openingHours: "Mo-Su 00:00-23:59",
          }),
        }}
      />

      <div className="min-h-screen bg-white text-gray-900">

        {/* HEADER */}
        <header className="bg-black/80 backdrop-blur text-white px-6 py-4 flex items-center justify-between fixed w-full z-50">
          <img
            src="/nuvi-logo.png"
            alt="NUVI Welding and Fabrication LLC Logo"
            className="h-12 w-auto"
          />
          <a
            href="tel:4698455728"
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold tracking-wide"
          >
            Call 24/7
          </a>
        </header>

        {/* HERO VIDEO */}
        <section className="relative h-screen w-full overflow-hidden pt-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/hero-welding.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              NUVI Welding & Fabrication LLC
            </h1>

            <h2 className="text-red-500 text-2xl md:text-3xl font-semibold tracking-wide mb-6">
              24/7 Mobile Welding in Dallas–Fort Worth & Surrounding Areas
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              Emergency and scheduled mobile welding services across Dallas,
              Fort Worth, Arlington, Plano, Frisco, Irving, Garland, McKinney
              and surrounding Texas communities. Specializing in fencing,
              staircases, handrails, barndominiums and custom steel fabrication.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:4698455728"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg tracking-wide shadow-lg"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg tracking-wide shadow-lg"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mobile Welding & Fabrication Services in Dallas–Fort Worth
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "MOBILE WELDING & FABRICATION",
              "BARNDOMINIUMS",
              "FENCING",
              "HANDRAILS",
              "STAIRCASES",
            ].map((service) => (
              <div
                key={service}
                className="border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
              >
                <Hammer className="mx-auto mb-4 text-red-600" />
                <p className="font-extrabold uppercase text-sm">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR WORK */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Recent Dallas–Fort Worth Welding Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/fencing.png" alt="Custom steel fencing Dallas TX" className="rounded-2xl shadow-lg h-[300px] w-full object-cover"/>
              <img src="/stairs.png" alt="Steel staircase fabrication Fort Worth TX" className="rounded-2xl shadow-lg h-[300px] w-full object-cover"/>
              <img src="/handrails.png" alt="Commercial steel handrails Dallas TX" className="rounded-2xl shadow-lg h-[300px] w-full object-cover"/>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
  Service Areas
</h2>

<h3 className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide mb-6">
  Dallas–Fort Worth & Surrounding Cities
</h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Proudly serving Dallas, Fort Worth, Arlington, Plano, Frisco,
              Irving, Garland, McKinney and surrounding Texas communities.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
  Get a Free Estimate
</h2>
<p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Fast response. 24/7 emergency mobile welding available across Dallas–Fort Worth.
              </p>

              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <Phone className="text-red-600" />
                  <span>(469) 845-5728</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-red-600" />
                  <span>nuvicteam@gmail.com</span>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xpqjlbqa"
              method="POST"
              className="bg-gray-100 p-6 rounded-2xl shadow"
            >
              <input type="text" name="name" placeholder="Name" required className="w-full mb-4 p-3 rounded-lg border"/>
              <input type="tel" name="phone" placeholder="Phone" required className="w-full mb-4 p-3 rounded-lg border"/>
              <input type="email" name="email" placeholder="Email" className="w-full mb-4 p-3 rounded-lg border"/>
              <textarea name="details" placeholder="Project details" required rows={4} className="w-full mb-4 p-3 rounded-lg border"/>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl">
                REQUEST FREE ESTIMATE
              </button>
            </form>
          </div>
        </section>

{/* FAQ SECTION */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-900 mb-4">
      Mobile Welding FAQ
    </h2>

    <p className="text-center text-lg text-gray-600 mb-14">
      Answers to common questions about our 24/7 mobile welding services in
      Dallas–Fort Worth and surrounding areas.
    </p>

    <div className="space-y-10">

      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-3">
          Do you offer 24/7 emergency mobile welding in Dallas?
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Yes. NUVI Welding & Fabrication LLC provides 24/7 emergency mobile
          welding services throughout Dallas and surrounding Texas cities.
        </p>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-3">
          What areas do you serve outside Dallas?
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We proudly serve Fort Worth, Arlington, Plano, Frisco, Irving,
          Garland, McKinney and other surrounding communities.
        </p>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-3">
          What types of welding projects do you handle?
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We specialize in fencing, staircases, handrails, barndominiums,
          structural steel and custom metal fabrication projects.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* FOOTER */}
        <footer className="bg-black text-gray-300 py-6 text-center text-sm">
          © {new Date().getFullYear()} NUVI Welding and Fabrication LLC • 24/7 Mobile Welding Dallas–Fort Worth
        </footer>
      </div>
    </>
  );
}

