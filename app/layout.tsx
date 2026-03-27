import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';

import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { getDictionary, getLocale } from '@/lib/i18n';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rentatelo-demo.vercel.app'),
  title: {
    default: 'rentatelo.com',
    template: '%s | rentatelo.com',
  },
  description:
    'Marketplace Orlando-first de alquiler de autos con entrega en MCO, hoteles y resorts, pensado para familias y viajeros LATAM.',
  openGraph: {
    title: 'rentatelo.com',
    description: 'Reserva el auto exacto para Orlando con entrega en aeropuerto, hotel o resort.',
    type: 'website',
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
    <html data-scroll-behavior="smooth" lang={locale} className={dmSans.variable}>
      <body>
        <a className="skip-link btn-primary" href="#main-content">
          Skip to content
        </a>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <main id="main-content">{children}</main>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
