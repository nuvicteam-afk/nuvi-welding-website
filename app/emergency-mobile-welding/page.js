import Link from "next/link";

export const metadata = {
  title: "24/7 Emergency Mobile Welding | NUVI Welding & Fabrication LLC",
  description:
    "Emergency mobile welding services throughout Dallas–Fort Worth. Commercial, industrial, structural steel, heavy equipment repairs and fabrication available 24/7.",
};

const services = [
  "Structural Steel Repairs",
  "Heavy Equipment Repairs",
  "Commercial Welding",
  "Industrial Welding",
  "Pipe Welding",
  "Trailer Repairs",
  "Fence Repairs",
  "Handrail Repairs",
];

const areas = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Plano",
  "Frisco",
  "Irving",
  "Garland",
  "McKinney",
];

const faqs = [
  {
    q: "Do you offer 24/7 emergency welding?",
    a: "Yes. We provide emergency mobile welding services throughout Dallas–Fort Worth.",
  },
  {
    q: "Can you weld on-site?",
    a: "Absolutely. Our fully equipped mobile welding truck comes directly to your location.",
  },
  {
    q: "Do you work on commercial and industrial projects?",
    a: "Yes. We specialize in commercial, industrial and structural steel welding.",
  },
];

export default function EmergencyMobileWelding() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <img
          src="/fencing.png"
          alt="Emergency Mobile Welding"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center text-white">

          <span className="inline-flex rounded-full bg-red-600 px-6 py-2 font-bold shadow-lg">
            AVAILABLE 24/7
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Emergency
            <span className="block text-red-500">
              Mobile Welding
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Fast-response mobile welding services for commercial,
            industrial, structural steel, fabrication and heavy equipment
            throughout Dallas–Fort Worth.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:4698455728"
              className="rounded-xl bg-red-600 px-10 py-5 font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              📞 Call Now
            </a>

            <Link
              href="/#contact"
              className="rounded-xl bg-white px-10 py-5 font-bold text-black shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-200"
            >
              Free Estimate
            </Link>

          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">

            {[
              "24/7 Emergency Service",
              "Mobile Welding",
              "Fully Insured",
              "Fast Response",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-md"
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-black">
            Emergency Welding Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
            Our emergency welding team responds quickly to breakdowns,
            structural damage and equipment failures to minimize downtime.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-6 text-2xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>
                  ✅ {service}
                </li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-6 text-2xl font-bold">
              Service Areas
            </h3>

            <ul className="space-y-4">

              {areas.map((city) => (
                <li key={city}>
                  📍 {city}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>      {/* PROJECT IMAGE */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <img
          src="/handrails.png"
          alt="Emergency Mobile Welding Project"
          className="w-full h-[500px] rounded-3xl object-cover shadow-2xl"
        />

      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-black">
              Why Choose NUVI Welding?
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Fast response. Professional workmanship. Reliable service.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">
                Fast Response
              </h3>
              <p className="text-gray-600 leading-7">
                We understand downtime costs money. Our mobile welding truck
                responds quickly throughout Dallas–Fort Worth.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-6">🏗️</div>
              <h3 className="text-2xl font-bold mb-4">
                Commercial & Industrial
              </h3>
              <p className="text-gray-600 leading-7">
                Structural steel, heavy equipment, trailers, fabrication,
                pipe welding and emergency repairs.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-6">🛠️</div>
              <h3 className="text-2xl font-bold mb-4">
                Quality Workmanship
              </h3>
              <p className="text-gray-600 leading-7">
                Every repair is completed with professional attention to
                safety, durability and quality.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-24">

        <h2 className="text-center text-4xl font-black mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.q}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >

              <h3 className="text-xl font-bold mb-3">
                {faq.q}
              </h3>

              <p className="text-gray-600 leading-7">
                {faq.a}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-black">
            Need Emergency Welding Right Now?
          </h2>

          <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto">
            Available 24/7 for emergency mobile welding throughout
            Dallas–Fort Worth.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:4698455728"
              className="rounded-xl bg-white px-10 py-5 text-lg font-bold text-black shadow-2xl transition-all duration-300 hover:scale-105"
            >
              📞 (469) 845-5728
            </a>

            <Link
              href="/#contact"
              className="rounded-xl border-2 border-white px-10 py-5 text-lg font-bold transition-all duration-300 hover:bg-white hover:text-black"
            >
              Request a Free Estimate
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}