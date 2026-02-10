"use client";

import { Phone, Mail, Hammer } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="bg-black text-white px-6 py-5 flex items-center justify-between">
        <h1 className="font-extrabold tracking-wide text-lg">
          NUVI WELDING AND FABRICATION LLC
        </h1>
        <a
          href="tel:4698455728"
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold"
        >
          Call 24/7
        </a>
      </header>

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          24/7 MOBILE WELDING & FABRICATION IN DALLAS–FORT WORTH
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-8 text-gray-200">
          NUVI Welding and Fabrication LLC provides emergency and scheduled mobile
          welding services across Dallas–Fort Worth. Specializing in fencing,
          staircases, handrails, barndominiums, and custom steel fabrication.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:4698455728"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold"
          >
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          OUR SERVICES • DALLAS–FORT WORTH
        </h3>
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
          <h3 className="text-3xl font-bold text-center mb-10">
            OUR WORK • DALLAS TX WELDING PROJECTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/Fencing Brick Home.PNG"
              alt="Custom steel fencing installed in Dallas Texas"
              className="rounded-2xl shadow-lg h-[300px] w-full object-cover"
            />
            <img
              src="/Staircases Dallas.PNG"
              alt="Steel staircase fabrication in Dallas Fort Worth"
              className="rounded-2xl shadow-lg h-[300px] w-full object-cover"
            />
            <img
              src="/Handrails Colling College.PNG"
              alt="Commercial steel handrails installed in Dallas TX"
              className="rounded-2xl shadow-lg h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">GET A FREE ESTIMATE</h3>
            <p className="text-gray-700 mb-6">
              Call or submit the form for fast response. We offer 24/7 mobile
              welding services across Dallas–Fort Worth.
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
            action="mailto:nuvicteam@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-gray-100 p-6 rounded-2xl shadow"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full mb-4 p-3 rounded-lg border"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="w-full mb-4 p-3 rounded-lg border"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-4 p-3 rounded-lg border"
            />
            <textarea
              name="details"
              placeholder="Project details"
              required
              rows={4}
              className="w-full mb-4 p-3 rounded-lg border"
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl"
            >
              REQUEST FREE ESTIMATE
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} NUVI Welding and Fabrication LLC • 24/7 Mobile
        Welding Dallas–Fort Worth
      </footer>
    </div>
  );
}
