import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { getDictionary, getLocale } from '@/lib/i18n';

export const metadata: Metadata = {
  metadataBase: new URL('https://rentatelo-demo.vercel.app'),
  title: {
    default: 'rentatelo.com',
    template: '%s | rentatelo.com',
  },
  description:
    'Premium bilingual prototype for an Orlando-first car rental marketplace with curated vehicles, delivery and host trust flows.',
  openGraph: {
    title: 'rentatelo.com',
    description: 'Premium bilingual prototype for an Orlando-first car rental marketplace.',
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
    <html data-scroll-behavior="smooth" lang={locale}>
      <body>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <main>{children}</main>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
