import Link from "next/link";

export const metadata = {
  title: "Apartment Complex Welding & Property Maintenance | NUVI Welding & Fabrication LLC",
  description:
    "Apartment complex welding, gate repairs, handrails, concrete steps, carports, fences, structural steel repairs and property maintenance throughout Dallas–Fort Worth.",
};

const services = [
  "Apartment Gate Repairs",
  "Fence Repairs",
  "Handrail Installation & Repair",
  "Staircase Welding",
  "Concrete Steps & Stair Repairs",
  "Steel Carport Repairs",
  "Carport Installation",
  "Dumpster Enclosure Repairs",
  "Balcony & Railing Repairs",
  "Structural Steel Repairs",
  "Maintenance Welding",
  "Emergency Mobile Welding",
];

const customers = [
  "Apartment Complexes",
  "HOA Communities",
  "Property Management Companies",
  "Commercial Property Owners",
  "Maintenance Contractors",
  "Senior Living Communities",
  "Real Estate Investors",
  "Multi-Family Housing",
];

const faqs = [
  {
    q: "Do you work with apartment complexes?",
    a: "Yes. We provide welding, maintenance and repair services for apartment communities throughout Dallas–Fort Worth.",
  },
  {
    q: "Can you repair apartment gates and handrails?",
    a: "Absolutely. We repair security gates, fences, handrails, staircases, balconies and structural steel.",
  },
  {
    q: "Do you offer mobile service?",
    a: "Yes. Our mobile welding truck comes directly to your property.",
  },
];

export default function ApartmentComplexWelding() {
  return (
    <main className="bg-gray-50 text-gray-900">

      <section className="relative overflow-hidden">

        <img
          src="/stairs.png"
          alt="Apartment Complex Welding"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center text-white">

          <span className="inline-flex rounded-full bg-red-600 px-6 py-2 font-bold">
            PROPERTY MAINTENANCE
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Apartment Complex
            <span className="block text-red-500">
              Welding Services
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Professional apartment complex maintenance, mobile welding,
            concrete step repairs, carport repairs, gates, fences,
            handrails and structural steel services across
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
              "Apartment Specialists",
              "Mobile Service",
              "Fast Response",
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
            Apartment Property Maintenance Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We help apartment communities stay safe, attractive and fully
            operational with professional mobile welding and property
            maintenance solutions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-6 text-2xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>✅ {service}</li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-6 text-2xl font-bold">
              We Serve
            </h3>

            <ul className="space-y-4">

              {customers.map((customer) => (
                <li key={customer}>🏢 {customer}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>       {/* FEATURED PROJECT */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <img
          src="/fencing.png"
          alt="Apartment Complex Property Maintenance"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

      </section>

      {/* WHY PROPERTY MANAGERS CHOOSE US */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-black">
              Why Property Managers Choose NUVI
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              We help apartment communities stay safe, attractive, and
              well-maintained with dependable mobile welding and repair
              services.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="text-5xl mb-5">🏢</div>

              <h3 className="text-2xl font-bold mb-4">
                Apartment Specialists
              </h3>

              <p className="text-gray-600 leading-7">
                We understand the needs of apartment communities, HOAs,
                and property management companies.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="text-5xl mb-5">⚡</div>

              <h3 className="text-2xl font-bold mb-4">
                Fast Mobile Service
              </h3>

              <p className="text-gray-600 leading-7">
                Our mobile welding truck comes directly to your property,
                helping reduce downtime and complete repairs quickly.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="text-5xl mb-5">🛠️</div>

              <h3 className="text-2xl font-bold mb-4">
                Complete Property Repairs
              </h3>

              <p className="text-gray-600 leading-7">
                From gates and fences to handrails, carports, concrete
                steps, balconies, and structural steel repairs, we help
                keep your property in excellent condition.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROPERTY SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="rounded-3xl bg-red-600 text-white p-12 shadow-2xl">

          <h2 className="text-4xl font-black mb-8 text-center">
            Property Maintenance Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <div>✅ Apartment Gate Repairs</div>
            <div>✅ Concrete Step Repairs</div>

            <div>✅ Carport Repairs</div>
            <div>✅ Steel Carport Installation</div>

            <div>✅ Balcony Repairs</div>
            <div>✅ Handrail Repairs</div>

            <div>✅ Staircase Welding</div>
            <div>✅ Dumpster Enclosure Repairs</div>

            <div>✅ Fence Repairs</div>
            <div>✅ Structural Steel Repairs</div>

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

      {/* CTA */}

      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-black">
            Need Apartment Complex Maintenance?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Whether you need gate repairs, concrete steps, handrails,
            carports, fences, or structural steel repairs, NUVI Welding &
            Fabrication is ready to help throughout Dallas–Fort Worth.
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