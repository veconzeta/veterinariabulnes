import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CLINICA } from "@/lib/constants";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${CLINICA.nombre} | ${CLINICA.doctor} · Veterinario en Santiago`,
  description: `Clínica veterinaria en ${CLINICA.direccion}, a pasos del ${CLINICA.metro}. Consultas para perros, gatos y animales exóticos. Más de ${CLINICA.experiencia} de experiencia. Agenda por WhatsApp.`,
  keywords: [
    "veterinario santiago",
    "veterinario bulnes",
    "veterinario metro república",
    "clínica veterinaria santiago centro",
    "veterinario perros gatos santiago",
    "veterinario animales exóticos santiago",
    "dr guillermo pozo veterinario",
    "veterinaria bulnes",
  ],
  authors: [{ name: CLINICA.doctor }],
  openGraph: {
    title: `${CLINICA.nombre} | ${CLINICA.doctor}`,
    description: `Atención veterinaria de confianza en ${CLINICA.direccion}, Santiago. Más de ${CLINICA.experiencia} de experiencia.`,
    url: `https://${CLINICA.web}`,
    siteName: CLINICA.nombre,
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINICA.nombre} | ${CLINICA.doctor}`,
    description: `Veterinario en ${CLINICA.direccion}, Santiago. Agenda por WhatsApp.`,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `https://${CLINICA.web}` },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: CLINICA.nombre,
  description: `Clínica veterinaria con más de ${CLINICA.experiencia} de experiencia, especializada en perros, gatos y animales exóticos.`,
  url: `https://${CLINICA.web}`,
  telephone: CLINICA.telefono,
  email: CLINICA.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINICA.direccion,
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  openingHours: "Mo-Fr 10:00-19:00",
  priceRange: "$$",
  medicalSpecialty: ["Veterinary Medicine"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
