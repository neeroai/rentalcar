import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";

import "./globals.css";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getDictionary, getLocale } from "@/lib/i18n";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rentatelo-demo.vercel.app"),
  title: {
    default: "rentatelo.com",
    template: "%s | rentatelo.com",
  },
  description:
    "Marketplace de alquiler de autos en Orlando y Miami. Vehículos curados, entrega en hotel y aeropuerto, hosts verificados.",
  openGraph: {
    title: "rentatelo.com",
    description:
      "Alquila el auto perfecto en Orlando y Miami. Entrega en tu hotel o aeropuerto.",
    type: "website",
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
      <body>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <main>{children}</main>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
