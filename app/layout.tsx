import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getDictionary, getLocale } from "@/lib/i18n";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rentatelo-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "rentatelo.com",
    template: "%s | rentatelo.com",
  },
  description:
    "Marketplace Orlando-first de alquiler de autos con entrega en MCO, hoteles y resorts, pensado para familias y viajeros LATAM.",
  openGraph: {
    title: "rentatelo.com",
    description:
      "Reserva el auto exacto para Orlando con entrega en aeropuerto, hotel o resort.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "rentatelo.com — Orlando car rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "rentatelo.com",
    description:
      "Reserva el auto exacto para Orlando con entrega en aeropuerto, hotel o resort.",
    images: ["/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <html
      data-scroll-behavior="smooth"
      lang={locale}
      className={dmSans.variable}
    >
      <head>
        <meta content="light" name="color-scheme" />
      </head>
      <body>
        <a className="skip-link btn-primary" href="#main-content">
          {locale === "es" ? "Ir al contenido" : "Skip to content"}
        </a>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <main id="main-content">{children}</main>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
