import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              NUVI Welding & Fabrication
            </h3>

            <p className="text-gray-400 leading-7">
              Professional 24/7 mobile welding and fabrication services
              throughout Dallas–Fort Worth.
            </p>

            <a
              href="tel:4698455728"
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold text-white"
            >
              📞 Call 24/7
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Services
            </h4>

            <ul className="space-y-3">

              <li>
                <Link href="/emergency-mobile-welding" className="hover:text-white">
                  Emergency Mobile Welding
                </Link>
              </li>

              <li>
                <Link href="/commercial-welding" className="hover:text-white">
                  Commercial Welding
                </Link>
              </li>

              <li>
                <Link href="/industrial-welding" className="hover:text-white">
                  Industrial Welding
                </Link>
              </li>

              <li>
                <Link href="/heavy-equipment-welding" className="hover:text-white">
                  Heavy Equipment Welding
                </Link>
              </li>

              <li>
                <Link href="/structural-steel-repair" className="hover:text-white">
                  Structural Steel Repair
                </Link>
              </li>

              <li>
                <Link href="/gate-repair" className="hover:text-white">
                  Gate Repair
                </Link>
              </li>

              <li>
                <Link href="/apartment-complex-welding" className="hover:text-white">
                  Apartment Complex Welding
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Contact
            </h4>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>(469) 845-5728</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>nuvicteam@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Serving Dallas–Fort Worth</span>
              </div>

            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Areas We Serve
            </h4>

            <ul className="space-y-3">
              <li>Dallas</li>
              <li>Plano</li>
              <li>Frisco</li>
              <li>McKinney</li>
              <li>Allen</li>
              <li>Princeton</li>
              <li>Melissa</li>
              <li>Sherman</li>
              <li>Garland</li>
              <li>Irving</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} NUVI Welding & Fabrication LLC. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}