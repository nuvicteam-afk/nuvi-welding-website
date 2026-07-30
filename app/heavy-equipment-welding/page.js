import Link from "next/link";

export const metadata = {
  title: "Heavy Equipment Welding | NUVI Welding & Fabrication LLC",
  description:
    "Heavy equipment welding services throughout Dallas–Fort Worth. Mobile welding for excavators, loaders, bulldozers, skid steers, buckets, trailers, construction equipment, repairs, reinforcement, and custom fabrication.",
};

const services = [
  "Heavy Equipment Welding",
  "Excavator Bucket Welding",
  "Loader Bucket Repairs",
  "Bulldozer Blade Repairs",
  "Skid Steer Welding",
  "Boom & Arm Repairs",
  "Cracked Frame Welding",
  "Equipment Reinforcement",
  "Hardfacing & Wear Protection",
  "Wear Plate Replacement",
  "Trailer Welding",
  "Emergency Mobile Welding",
];

const equipment = [
  "Excavators",
  "Bulldozers",
  "Skid Steers",
  "Wheel Loaders",
  "Backhoes",
  "Dozers",
  "Dump Trucks",
  "Trailers",
  "Construction Equipment",
  "Forestry Equipment",
];

export default function HeavyEquipmentWelding() {
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
            HEAVY EQUIPMENT WELDING
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Heavy Equipment
            <span className="block text-red-500">
              Welding Services
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Mobile heavy equipment welding for excavators, loaders,
            bulldozers, skid steers, trailers, buckets and construction
            equipment throughout Dallas–Fort Worth. We provide dependable
            repairs that help keep your equipment working.
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
              "Heavy Equipment Specialists",
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
            Heavy Equipment Welding Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We repair cracked, worn and damaged heavy equipment for
            contractors, excavation companies, municipalities, farms,
            and industrial operations.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              Welding Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>✅ {service}</li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              Equipment We Service
            </h3>

            <ul className="space-y-4">

              {equipment.map((item) => (
                <li key={item}>🚜 {item}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>      {/* FEATURED IMAGE */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <img
          src="/fencing.png"
          alt="Heavy Equipment Welding"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

      </section>

      {/* CAPABILITIES */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-black">
              Heavy Equipment Welding Capabilities
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              We provide dependable welding solutions for contractors,
              excavation companies, municipalities, farms, and industrial
              operations throughout Dallas–Fort Worth.
            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🛠️</div>

              <h3 className="text-2xl font-bold mb-4">
                Bucket Rebuilding
              </h3>

              <p className="text-gray-600 leading-7">
                Repair cracked buckets, cutting edges, side plates,
                reinforcement ribs and worn attachment components.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🦷</div>

              <h3 className="text-2xl font-bold mb-4">
                Hardfacing & Wear Protection
              </h3>

              <p className="text-gray-600 leading-7">
                Extend equipment life with hardfacing, wear bars,
                wear plates and reinforcement welding.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">⚙️</div>

              <h3 className="text-2xl font-bold mb-4">
                Structural Repairs
              </h3>

              <p className="text-gray-600 leading-7">
                Repair cracked frames, booms, loader arms,
                attachments and structural steel components.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="rounded-3xl bg-red-600 text-white p-12 shadow-2xl">

          <h2 className="text-4xl font-black text-center mb-10">
            Why Contractors Choose NUVI
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <div>✅ Mobile Welding Service</div>
            <div>✅ Fast Response Times</div>

            <div>✅ Emergency Equipment Repairs</div>
            <div>✅ Experienced Welders</div>

            <div>✅ Structural Welding</div>
            <div>✅ Bucket Reinforcement</div>

            <div>✅ Hardfacing Services</div>
            <div>✅ Dallas–Fort Worth Coverage</div>

            <div>✅ Fully Insured</div>
            <div>✅ Free Estimates</div>

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
              Do you provide on-site heavy equipment welding?
            </h3>
            <p className="text-gray-600 leading-7">
              Yes. Our mobile welding truck comes directly to your job
              site or equipment location throughout the Dallas–Fort Worth
              area.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Can you repair cracked excavator buckets?
            </h3>
            <p className="text-gray-600 leading-7">
              Yes. We repair cracked buckets, reinforce weak areas,
              replace wear plates, and rebuild damaged components.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Do you work with contractors and construction companies?
            </h3>
            <p className="text-gray-600 leading-7">
              Absolutely. We work with excavation contractors,
              construction companies, municipalities, farms, and
              industrial facilities.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-black">
            Need Heavy Equipment Welding?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Whether you need bucket rebuilding, frame repairs,
            reinforcement, hardfacing, or emergency welding, NUVI Welding
            & Fabrication is ready to help keep your equipment working.
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