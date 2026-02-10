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
  title: "NUVI Welding and Fabrication LLC | 24/7 Mobile Welding Dallas–Fort Worth",
  description:
    "NUVI Welding and Fabrication LLC provides 24/7 mobile welding, fencing, staircases, handrails, and custom steel fabrication across Dallas–Fort Worth.",

  openGraph: {
    title: "NUVI Welding and Fabrication LLC",
    description:
      "24/7 Mobile Welding & Fabrication serving Dallas–Fort Worth. Call for a free estimate.",
    url: "https://nuviwelding.com",
    siteName: "NUVI Welding and Fabrication LLC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NUVI Welding and Fabrication LLC – Dallas Mobile Welding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
