import Link from "next/link";

export const metadata = {
  title: "Structural Steel Repair | NUVI Welding & Fabrication LLC",
  description:
    "Structural steel repair services throughout Dallas–Fort Worth. Mobile welding for steel beams, columns, staircases, platforms, mezzanines, handrails, and commercial structural repairs.",
};

const services = [
  "Structural Steel Repairs",
  "Steel Beam Repairs",
  "Steel Column Repairs",
  "Mezzanine Repairs",
  "Platform Repairs",
  "Structural Reinforcement",
  "Crack Repairs",
  "Steel Frame Repairs",
  "Commercial Welding",
  "Industrial Welding",
  "Emergency Structural Repairs",
  "Mobile Welding Services",
];

const structures = [
  "Warehouses",
  "Commercial Buildings",
  "Industrial Facilities",
  "Apartment Complexes",
  "Retail Centers",
  "Manufacturing Plants",
  "Office Buildings",
  "Municipal Facilities",
];

export default function StructuralSteelRepair() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-welding.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center text-white">

          <span className="inline-flex rounded-full bg-red-600 px-6 py-2 font-bold">
            STRUCTURAL STEEL REPAIR
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Structural Steel
            <span className="block text-red-500">
              Repair Services
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Professional structural steel welding and repair services for
            commercial and industrial properties throughout Dallas–Fort
            Worth. From damaged beams and columns to mezzanines and steel
            platforms, NUVI Welding & Fabrication delivers dependable,
            on-site solutions.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:4698455728"
              className="rounded-xl bg-red-600 px-10 py-5 font-bold transition hover:bg-red-700"
            >
              📞 Call Now
            </a>

            <Link
              href="/#contact"
              className="rounded-xl bg-white px-10 py-5 font-bold text-black transition hover:bg-gray-200"
            >
              Free Estimate
            </Link>

          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">

            {[
              "Commercial Specialists",
              "Emergency Service",
              "Mobile Welding",
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

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            Structural Steel Repair Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We repair damaged structural steel components that help keep
            commercial and industrial facilities safe, operational, and
            code-compliant.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>✅ {service}</li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              Structures We Service
            </h3>

            <ul className="space-y-4">

              {structures.map((item) => (
                <li key={item}>🏗️ {item}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>      {/* FEATURED IMAGE */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <img
          src="/fencing.png"
          alt="Structural Steel Repair"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

      </section>

      {/* STRUCTURAL CAPABILITIES */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-black">
              Structural Steel Capabilities
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              From minor repairs to major structural reinforcements, we
              provide dependable welding services that keep commercial
              and industrial buildings safe and operational.
            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🏗️</div>

              <h3 className="text-2xl font-bold mb-4">
                Beam & Column Repairs
              </h3>

              <p className="text-gray-600 leading-7">
                Repair damaged structural beams, steel columns,
                connection plates, and welded assemblies.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🔩</div>

              <h3 className="text-2xl font-bold mb-4">
                Structural Reinforcement
              </h3>

              <p className="text-gray-600 leading-7">
                Reinforce existing steel members, add support plates,
                stiffeners, and structural modifications.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🏢</div>

              <h3 className="text-2xl font-bold mb-4">
                Commercial Buildings
              </h3>

              <p className="text-gray-600 leading-7">
                Structural welding for warehouses, office buildings,
                apartment communities, retail centers, and industrial
                facilities.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="rounded-3xl bg-red-600 text-white p-12 shadow-2xl">

          <h2 className="text-4xl font-black text-center mb-10">
            Why Businesses Choose NUVI
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <div>✅ Mobile Structural Welding</div>
            <div>✅ Commercial & Industrial Experience</div>

            <div>✅ Emergency Repair Service</div>
            <div>✅ Fast Response Times</div>

            <div>✅ Fully Insured</div>
            <div>✅ Structural Reinforcement</div>

            <div>✅ Steel Beam & Column Repairs</div>
            <div>✅ Free Estimates</div>

            <div>✅ Dallas–Fort Worth Coverage</div>
            <div>✅ Quality Workmanship</div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-24">

        <h2 className="text-center text-4xl font-black mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              Do you perform structural steel repairs on-site?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Our mobile welding service allows us to perform many
              structural steel repairs directly at commercial and
              industrial job sites.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              Can you repair damaged steel beams and columns?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. We repair and reinforce structural beams, columns,
              supports, and other welded steel components.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              What types of properties do you work on?
            </h3>

            <p className="text-gray-600 leading-7">
              We provide structural steel welding for warehouses,
              commercial buildings, apartment complexes, retail centers,
              manufacturing facilities, and industrial properties.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-black">
            Need Structural Steel Repairs?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Whether you need beam repairs, structural reinforcement,
            emergency welding, or commercial steel repairs, NUVI Welding
            & Fabrication is ready to help throughout Dallas–Fort Worth.
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