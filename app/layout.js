
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NUVI Welding & Fabrication LLC | 24/7 Mobile Welding Dallas–Fort Worth",
  description:
    "NUVI Welding & Fabrication LLC provides 24/7 mobile welding services in Dallas, Fort Worth, Arlington, Plano, Frisco, Irving, Garland and surrounding Texas areas. Fencing, staircases, handrails, barndominiums and custom steel fabrication.",
  keywords: [
    "Mobile Welding Dallas",
    "Mobile Welding Fort Worth",
    "Emergency Welding Dallas",
    "Steel Fabrication Dallas",
    "Fencing Contractor Dallas",
    "Staircase Welding Fort Worth",
    "Handrails Dallas TX",
  ],
  openGraph: {
    title:
      "NUVI Welding & Fabrication LLC | 24/7 Mobile Welding Dallas–Fort Worth",
    description:
      "Professional 24/7 mobile welding services across Dallas–Fort Worth and surrounding Texas cities.",
    url: "https://nuviwelding.com",
    siteName: "NUVI Welding & Fabrication LLC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
