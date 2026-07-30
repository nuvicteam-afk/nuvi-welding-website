"use client";

import Link from "next/link";
import { Phone, Mail, Hammer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="relative h-[90vh] overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-welding.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white max-w-5xl px-6">

            <p className="uppercase tracking-[6px] text-red-500 font-bold mb-4">
              Dallas • Fort Worth • 24/7 Mobile Welding
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Mobile Welding
              <br />
              & Fabrication
            </h1>

            <p className="mt-8 text-xl text-gray-200 max-w-3xl mx-auto">
              NUVI Welding & Fabrication provides commercial,
              industrial and emergency mobile welding throughout
              Dallas–Fort Worth. From structural steel and
              heavy equipment to gates, handrails and custom
              fabrication—we come to you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

              <a
                href="tel:4698455728"
                className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-bold transition"
              >
                📞 Call Now
              </a>

              <a
                href="#contact"
                className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-xl font-bold transition"
              >
                Get Free Estimate
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-14">
            OUR SERVICES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {[
              "Mobile Welding",
              "Barndominiums",
              "Steel Fencing",
              "Handrails",
              "Staircases",
            ].map((service) => (

              <div
                key={service}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
              >

                <Hammer className="mx-auto text-red-600 mb-5" size={42} />

                <h3 className="font-black uppercase">
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= COMMERCIAL SERVICES ================= */}

      <section className="py-20 bg-gray-900 text-white px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black text-center">
            Commercial & Industrial Welding
          </h2>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mt-5 mb-14">
            Professional welding services for contractors,
            commercial properties, industrial facilities,
            apartment complexes and heavy equipment across
            Dallas–Fort Worth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Link href="/emergency-mobile-welding">
              <div className="cursor-pointer rounded-2xl bg-white text-black p-8 hover:scale-105 transition shadow-xl">
                <h3 className="font-black text-2xl mb-3">
                  🚨 Emergency Mobile Welding
                </h3>
                <p>24/7 emergency welding services when downtime isn't an option.</p>
              </div>
            </Link>

            <Link href="/commercial-welding">
              <div className="cursor-pointer rounded-2xl bg-white text-black p-8 hover:scale-105 transition shadow-xl">
                <h3 className="font-black text-2xl mb-3">
                  🏢 Commercial Welding
                </h3>
                <p>Commercial buildings, contractors and business properties.</p>
              </div>
            </Link>

            <Link href="/industrial-welding">
              <div className="cursor-pointer rounded-2xl bg-white text-black p-8 hover:scale-105 transition shadow-xl">
                <h3 className="font-black text-2xl mb-3">
                  🏭 Industrial Welding
                </h3>
                <p>Plant maintenance, fabrication and industrial repairs.</p>
              </div>
            </Link>

            <Link href="/heavy-equipment-welding">
              <div className="cursor-pointer rounded-2xl bg-white text-black p-8 hover:scale-105 transition shadow-xl">
                <h3 className="font-black text-2xl mb-3">
                  🚜 Heavy Equipment
                </h3>
                <p>Excavators, trailers, buckets, loaders and construction equipment.</p>
              </div>
            </Link>

            <Link href="/structural-steel-repair">
              <div className="cursor-pointer rounded-2xl bg-white text-black p-8 hover:scale-105 transition shadow-xl">
                <h3 className="font-black text-2xl mb-3">
                  🏗 Structural Steel
                </h3>
                <p>Columns, beams, mezzanines and structural steel repairs.</p>
              </div>
            </Link>

            <Link href="/gate-repair">
              <div className="cursor-pointer rounded-2xl bg-white text-black p-8 hover:scale-105 transition shadow-xl">
                <h3 className="font-black text-2xl mb-3">
                  🚪 Gate Repair
                </h3>
                <p>Apartment gates, commercial gates and security gate welding.</p>
              </div>
            </Link>

          </div>

        </div>

      </section>      {/* ================= OUR WORK ================= */}

      <section className="py-20 bg-gray-100 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-5">
            Our Recent Projects
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We proudly serve homeowners, contractors, businesses and industrial
            facilities throughout the Dallas–Fort Worth metroplex.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/fencing.png"
              alt="Steel fencing project"
              className="rounded-2xl shadow-xl h-[320px] w-full object-cover hover:scale-105 transition"
            />

            <img
              src="/stairs.png"
              alt="Steel staircase fabrication"
              className="rounded-2xl shadow-xl h-[320px] w-full object-cover hover:scale-105 transition"
            />

            <img
              src="/handrails.png"
              alt="Commercial handrails"
              className="rounded-2xl shadow-xl h-[320px] w-full object-cover hover:scale-105 transition"
            />

          </div>

          <div className="text-center mt-12">

            <Link
              href="/projects"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold inline-block transition"
            >
              View All Projects
            </Link>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-20 bg-white px-6"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          <div>

            <h2 className="text-4xl font-black mb-6">
              Get Your Free Estimate
            </h2>

            <p className="text-gray-600 mb-10">
              Need emergency welding or a scheduled fabrication project?
              Contact NUVI Welding & Fabrication today for a free estimate.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-red-600" />
                <span className="text-lg font-semibold">
                  (469) 845-5728
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-red-600" />
                <span className="text-lg">
                  nuvicteam@gmail.com
                </span>
              </div>

            </div>

          </div>

          <form
            action="mailto:nuvicteam@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-gray-100 rounded-2xl shadow-xl p-8"
          >

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-4 rounded-lg border mb-5"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-lg border mb-5"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 rounded-lg border mb-5"
            />

            <textarea
              rows={5}
              name="details"
              placeholder="Tell us about your project..."
              required
              className="w-full p-4 rounded-lg border mb-6"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition"
            >
              REQUEST FREE ESTIMATE
            </button>

          </form>

        </div>

      </section>

      <Footer />

    </div>
  );
}
