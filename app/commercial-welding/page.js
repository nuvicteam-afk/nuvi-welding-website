import Link from "next/link";

export const metadata = {
  title: "Commercial Welding Services | NUVI Welding & Fabrication LLC",
  description:
    "Commercial welding contractor serving Dallas–Fort Worth. Structural steel, industrial welding, fabrication, equipment installation and mobile welding services.",
};

const services = [
  "Commercial Welding",
  "Structural Steel",
  "Industrial Fabrication",
  "Equipment Installation",
  "Steel Repairs",
  "Pipe Welding",
  "Mobile Welding",
  "Preventive Maintenance",
];

const industries = [
  "Warehouses",
  "Manufacturing Facilities",
  "Apartment Complexes",
  "Office Buildings",
  "Retail Centers",
  "Construction Sites",
  "Industrial Plants",
  "Property Management",
];

const faqs = [
  {
    q: "Do you provide on-site commercial welding?",
    a: "Yes. Our mobile welding truck comes directly to commercial and industrial job sites throughout Dallas–Fort Worth.",
  },
  {
    q: "Can you repair structural steel?",
    a: "Yes. We repair beams, columns, supports, stairs, handrails and structural steel components.",
  },
  {
    q: "Do you work after business hours?",
    a: "Yes. We offer flexible scheduling to minimize downtime for your business.",
  },
];

export default function CommercialWelding() {
  return (
    <main className="bg-gray-50 text-gray-900">

      <section className="relative overflow-hidden">

        <img
          src="/stairs.png"
          alt="Commercial Welding"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center text-white">

          <span className="inline-flex rounded-full bg-red-600 px-6 py-2 font-bold">
            COMMERCIAL & INDUSTRIAL
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Commercial
            <span className="block text-red-500">
              Welding Services
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-200 leading-9">
            Professional commercial welding, structural steel repair,
            fabrication and mobile welding services throughout
            Dallas–Fort Worth.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:4698455728"
              className="rounded-xl bg-red-600 px-10 py-5 font-bold shadow-2xl transition-all duration-300 hover:bg-red-700 hover:scale-105"
            >
              📞 Call Now
            </a>

            <Link
              href="/#contact"
              className="rounded-xl bg-white px-10 py-5 font-bold text-black shadow-2xl transition-all duration-300 hover:bg-gray-200 hover:scale-105"
            >
              Free Estimate
            </Link>

          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">

            {[
              "Commercial",
              "Industrial",
              "Mobile Service",
              "Fully Insured",
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

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-black">
            Commercial Welding Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            NUVI Welding & Fabrication provides dependable welding services
            for commercial buildings, contractors, industrial facilities,
            warehouses and property managers throughout North Texas.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-6 text-2xl font-bold">
              Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>✅ {service}</li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-6 text-2xl font-bold">
              Industries We Serve
            </h3>

            <ul className="space-y-4">

              {industries.map((industry) => (
                <li key={industry}>🏢 {industry}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>      {/* FEATURED PROJECT */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <img
          src="/fencing.png"
          alt="Commercial Welding Project"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

      </section>

      {/* WHY CHOOSE NUVI */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-black">
              Why Businesses Choose NUVI
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              We provide dependable commercial welding with fast response
              times, quality workmanship, and professional communication from
              start to finish.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-5">🏢</div>
              <h3 className="text-2xl font-bold mb-4">
                Commercial Experience
              </h3>
              <p className="text-gray-600 leading-7">
                We work with contractors, businesses, warehouses,
                apartment communities and industrial facilities.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-2xl font-bold mb-4">
                Fast Mobile Service
              </h3>
              <p className="text-gray-600 leading-7">
                Our mobile welding truck comes to your job site,
                reducing downtime and keeping your project moving.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-5">🛠️</div>
              <h3 className="text-2xl font-bold mb-4">
                Quality Workmanship
              </h3>
              <p className="text-gray-600 leading-7">
                We focus on clean, durable welds and reliable service
                that commercial customers can count on.
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
            Ready to Start Your Commercial Welding Project?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Whether you need structural steel repairs, fabrication, or on-site
            welding, NUVI Welding & Fabrication is ready to help across
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