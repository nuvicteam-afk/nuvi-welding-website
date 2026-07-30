import Link from "next/link";

export const metadata = {
  title: "Industrial Welding Services | NUVI Welding & Fabrication LLC",
  description:
    "Industrial welding, structural steel repair, equipment repair, plant maintenance, emergency welding, and fabrication services throughout Dallas–Fort Worth.",
};

const services = [
  "Industrial Welding",
  "Plant Maintenance Welding",
  "Structural Steel Repair",
  "Equipment Repair Welding",
  "On-Site Mobile Welding",
  "Emergency Industrial Repairs",
  "Pipe & Steel Fabrication",
  "Machine Base Repairs",
  "Conveyor Welding",
  "Heavy Equipment Repairs",
  "Preventative Maintenance",
  "Custom Metal Fabrication",
];

const industries = [
  "Manufacturing Facilities",
  "Warehouses",
  "Distribution Centers",
  "Factories",
  "Construction Companies",
  "Oil & Gas Contractors",
  "Municipal Facilities",
  "Commercial Contractors",
];

export default function IndustrialWelding() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}

      <section className="relative h-[700px] overflow-hidden">

        <img
          src="/industrial-hero.jpg"
          alt="Industrial Welding Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

<div className="relative z-10 flex h-full items-center justify-center">

<div className="max-w-5xl mx-auto px-6 w-full text-center text-white">

            <span className="inline-block rounded-full bg-red-600 px-6 py-2 font-bold">
              INDUSTRIAL WELDING
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              Industrial Welding
              <span className="block text-red-500">
                Built For Production
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
              NUVI Welding & Fabrication provides dependable industrial
              welding, structural steel repairs, equipment repair,
              fabrication, plant maintenance and emergency mobile
              welding throughout Dallas–Fort Worth.
            </p>

<div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href="tel:4698455728"
                className="rounded-xl bg-red-600 px-10 py-5 font-bold hover:bg-red-700 transition"
              >
                📞 Call Now
              </a>

              <Link
                href="/#contact"
                className="rounded-xl bg-white text-black px-10 py-5 font-bold hover:bg-gray-200 transition"
              >
                Free Estimate
              </Link>

            </div>

<div className="mt-16 grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
    
              {[
                "24/7 Emergency Service",
                "Mobile Welding",
                "Commercial & Industrial",
                "Fully Insured",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl bg-white/10 backdrop-blur-md p-5"
                >
                  ✓ {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            Industrial Welding Services
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We help businesses minimize downtime with fast,
            professional welding and fabrication services
            delivered on-site or in our shop.
          </p>

        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>✅ {service}</li>
              ))}

            </ul>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Industries We Serve
            </h3>

            <ul className="space-y-4">

              {industries.map((industry) => (
                <li key={industry}>🏭 {industry}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>      {/* FEATURED IMAGE */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <img
          src="/fencing.png"
          alt="Industrial Welding Services"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

      </section>

      {/* WHY CHOOSE NUVI */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-black">
              Why Industrial Clients Choose NUVI
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              We understand that downtime costs money. Our team responds
              quickly to keep your operation running safely and efficiently.
            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg">

              <div className="text-5xl mb-5">⚡</div>

              <h3 className="text-2xl font-bold mb-4">
                Fast Response
              </h3>

              <p className="text-gray-600 leading-7">
                Emergency mobile welding services available to reduce
                costly equipment and production downtime.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg">

              <div className="text-5xl mb-5">🏭</div>

              <h3 className="text-2xl font-bold mb-4">
                Industrial Experience
              </h3>

              <p className="text-gray-600 leading-7">
                We work with manufacturing plants, warehouses,
                contractors, municipalities, and commercial facilities.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg">

              <div className="text-5xl mb-5">🛠️</div>

              <h3 className="text-2xl font-bold mb-4">
                Reliable Repairs
              </h3>

              <p className="text-gray-600 leading-7">
                Quality welding solutions designed to restore equipment,
                structural steel, and fabricated components.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CAPABILITIES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="rounded-3xl bg-red-600 text-white p-12 shadow-2xl">

          <h2 className="text-4xl font-black text-center mb-10">
            Industrial Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <div>✅ Structural Steel Repairs</div>
            <div>✅ Equipment Repair Welding</div>

            <div>✅ Heavy Equipment Welding</div>
            <div>✅ Conveyor Repairs</div>

            <div>✅ Plant Maintenance</div>
            <div>✅ Machine Base Repairs</div>

            <div>✅ Pipe & Steel Fabrication</div>
            <div>✅ On-Site Mobile Welding</div>

            <div>✅ Emergency Repairs</div>
            <div>✅ Preventative Maintenance</div>

          </div>

        </div>

      </section>      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-black text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              Do you offer emergency industrial welding?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. We provide emergency mobile welding services to help
              businesses minimize costly downtime and keep operations
              running safely.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              Can you weld on-site?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. Our fully equipped mobile welding units allow us
              to perform repairs at your facility, warehouse, job site,
              or industrial plant.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              What industries do you serve?
            </h3>

            <p className="text-gray-600 leading-7">
              We serve manufacturing plants, warehouses, contractors,
              municipalities, fabrication shops, commercial businesses,
              and industrial facilities throughout Dallas–Fort Worth.
            </p>

          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-black">
            Need Industrial Welding Services?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-100">
            Whether you need emergency repairs, structural steel welding,
            fabrication, plant maintenance, or equipment repair, NUVI
            Welding & Fabrication is ready to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:4698455728"
              className="rounded-xl bg-white px-10 py-5 text-lg font-bold text-black hover:scale-105 transition"
            >
              📞 (469) 845-5728
            </a>

            <Link
              href="/#contact"
              className="rounded-xl border-2 border-white px-10 py-5 text-lg font-bold hover:bg-white hover:text-black transition"
            >
              Request a Free Estimate
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}