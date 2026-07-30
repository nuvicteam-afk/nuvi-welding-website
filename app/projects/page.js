import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const projects = [
  {
    title: "Commercial Steel Stair Installation",
    city: "Dallas, TX",
    type: "Commercial Fabrication",
    materials: "A36 Structural Steel • 2x2 Tube • Plate Steel",
    image: "/stairs.png",
    description:
      "Custom fabricated and installed a commercial steel staircase for a warehouse expansion.",
  },
  {
    title: "Custom Pipe Fence",
    city: "Princeton, TX",
    type: "Pipe Fence",
    materials: "Schedule 40 Pipe",
    image: "/fencing.png",
    description:
      "Designed and installed heavy-duty pipe fencing for a residential property.",
  },
  {
    title: "Commercial Handrails",
    city: "Plano, TX",
    type: "Safety Handrails",
    materials: "Steel Pipe • Base Plates",
    image: "/handrails.png",
    description:
      "Fabricated and installed ADA-compliant commercial safety handrails.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-black mb-6">
            Our Welding Projects
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of the commercial, industrial and residential
            welding projects completed by NUVI Welding & Fabrication across
            Dallas–Fort Worth.
          </p>

        </div>
      </section>

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {projects.map((project) => (

              <div
                key={project.title}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  <span className="text-red-600 font-bold uppercase text-sm">
                    {project.city}
                  </span>

                  <h2 className="text-2xl font-black mt-2">
                    {project.title}
                  </h2>

                  <div className="mt-5 space-y-2">

                    <p>
                      <strong>Type:</strong> {project.type}
                    </p>

                    <p>
                      <strong>Materials:</strong> {project.materials}
                    </p>

                  </div>

                  <p className="mt-6 text-gray-600 leading-7">
                    {project.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="bg-black text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black mb-6">
            Why Customers Choose NUVI
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="font-bold">24/7</h3>
              <p>Emergency Service</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="font-bold">Mobile</h3>
              <p>On-Site Welding</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="font-bold">Commercial</h3>
              <p>Industrial Specialists</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="font-bold">Free</h3>
              <p>Estimates</p>
            </div>

          </div>

          <div className="mt-14">

            <a
              href="tel:4698455728"
              className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-bold inline-block"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}