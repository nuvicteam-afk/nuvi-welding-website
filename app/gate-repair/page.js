import Link from "next/link";

export const metadata = {
  title: "Gate Repair Services | NUVI Welding & Fabrication LLC",
  description:
    "Commercial and apartment gate repair services throughout Dallas–Fort Worth. Mobile welding for security gates, swing gates, sliding gates, hinges, posts, frames, and emergency gate repairs.",
};

const services = [
  "Commercial Gate Repairs",
  "Apartment Gate Repairs",
  "Security Gate Welding",
  "Swing Gate Repairs",
  "Sliding Gate Repairs",
  "Gate Hinge Repairs",
  "Gate Post Repairs",
  "Steel Gate Repairs",
  "Frame Reinforcement",
  "Latch & Lock Repairs",
  "Emergency Gate Repairs",
  "Mobile Welding Service",
];

const gates = [
  "Apartment Complex Gates",
  "Commercial Property Gates",
  "Industrial Security Gates",
  "Warehouse Gates",
  "HOA Entrance Gates",
  "Office Building Gates",
  "Storage Facility Gates",
  "Steel Entrance Gates",
];

export default function GateRepair() {
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
            GATE REPAIR SERVICES
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Commercial &
            <span className="block text-red-500">
              Residential Gate Repair
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Fast, reliable mobile welding for damaged steel gates,
            security gates, entrance gates, hinges, posts, and gate
            frames throughout Dallas–Fort Worth.
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
              "Emergency Service",
              "Mobile Welding",
              "Commercial Specialists",
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
            Professional Gate Repair Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We repair damaged steel gates for apartment complexes,
            commercial properties, warehouses, industrial facilities,
            HOAs, and businesses throughout the Dallas–Fort Worth area.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              Gate Repair Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>✅ {service}</li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              Gates We Repair
            </h3>

            <ul className="space-y-4">

              {gates.map((gate) => (
                <li key={gate}>🚪 {gate}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>      {/* FEATURED IMAGE */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <img
          src="/fencing.png"
          alt="Commercial Gate Repair"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

      </section>

      {/* COMMON GATE REPAIRS */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-black">
              Common Gate Repairs We Perform
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              From broken hinges to damaged gate frames, we provide fast,
              professional welding repairs that restore safety and function.
            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🚪</div>

              <h3 className="text-2xl font-bold mb-4">
                Hinges & Gate Posts
              </h3>

              <p className="text-gray-600 leading-7">
                Repair broken hinges, leaning gate posts, cracked welds,
                and damaged mounting plates.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🛠️</div>

              <h3 className="text-2xl font-bold mb-4">
                Gate Frames
              </h3>

              <p className="text-gray-600 leading-7">
                Weld cracked steel frames, reinforce weak areas, repair
                bent gates, and restore structural strength.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🔒</div>

              <h3 className="text-2xl font-bold mb-4">
                Security Gates
              </h3>

              <p className="text-gray-600 leading-7">
                Repair commercial, apartment, warehouse, and industrial
                security gates to keep your property secure.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="rounded-3xl bg-red-600 text-white p-12 shadow-2xl">

          <h2 className="text-4xl font-black text-center mb-10">
            Why Property Managers Choose NUVI
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <div>✅ Fast Mobile Welding</div>
            <div>✅ Emergency Gate Repairs</div>

            <div>✅ Apartment Complex Specialists</div>
            <div>✅ Commercial Property Experience</div>

            <div>✅ Steel Gate Welding</div>
            <div>✅ Gate Frame Reinforcement</div>

            <div>✅ Fully Insured</div>
            <div>✅ Dallas–Fort Worth Coverage</div>

            <div>✅ Free Estimates</div>
            <div>✅ Reliable Service</div>

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
              Do you repair apartment complex gates?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. We repair steel entrance gates, security gates, and
              access gates for apartment communities throughout DFW.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              Can you weld broken gate hinges and frames?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We repair cracked hinges, bent frames, broken
              welds, and damaged gate posts.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="text-xl font-bold mb-3">
              Do you offer mobile gate repair?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Our mobile welding service allows us to complete many
              gate repairs directly at your property.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-black">
            Need Gate Repair Services?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Whether you need apartment gate repairs, commercial security
            gate welding, hinge repairs, or structural gate reinforcement,
            NUVI Welding & Fabrication is ready to help throughout
            Dallas–Fort Worth.
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