/**
 * @file how-it-works/page.tsx
 * @description How-it-works page reframed as an Orlando arrival-to-handoff story.
 * @module app/how-it-works
 * @exports HowItWorksPage
 */

import { Car, Clock, MessageCircle, Search, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { editorialImages } from '@/data/assets';
import { getDictionary, getLocale } from '@/lib/i18n';

export default async function HowItWorksPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const steps = [
    {
      icon: Search,
      title: locale === 'es' ? 'Empieza desde tu llegada real' : 'Start from your real arrival',
      detail:
        locale === 'es'
          ? 'El MVP parte de pickup, fechas y contexto: MCO, hotel o resort.'
          : 'The MVP starts from pickup, dates and context: MCO, hotel or resort.',
      image: editorialImages.howStepArrival,
    },
    {
      icon: MessageCircle,
      title: locale === 'es' ? 'Comparas con señales útiles' : 'Compare using useful signals',
      detail:
        locale === 'es'
          ? 'Cada ficha muestra host, entrega, políticas y vehículo exacto antes del checkout.'
          : 'Each detail page shows host, handoff, policies and the exact vehicle before checkout.',
      image: editorialImages.howStepCompare,
    },
    {
      icon: Car,
      title: locale === 'es' ? 'Confirmas y coordinas' : 'Confirm and coordinate',
      detail:
        locale === 'es'
          ? 'Cierras la reserva demo, recibes instrucciones y mantienes el hilo con tu host durante semanas Disney, Universal o Epic.'
          : 'You confirm the demo booking, receive instructions, and keep the host thread visible during Disney, Universal, or Epic weeks.',
      image: editorialImages.howStepConfirm,
    },
  ] as const;

  const trustItems = [
    {
      icon: Shield,
      title: locale === 'es' ? 'Claridad antes de pagar' : 'Clarity before paying',
      detail:
        locale === 'es'
          ? 'El flujo enseña políticas, delivery y contexto del host antes del CTA final.'
          : 'The flow surfaces policies, handoff and host context before the final CTA.',
    },
    {
      icon: Clock,
      title: locale === 'es' ? 'Menos fricción operativa' : 'Less operational friction',
      detail:
        locale === 'es'
          ? 'Todo el journey está orientado a llegadas, equipaje y tiempos reales de viaje.'
          : 'The entire journey is designed around real arrivals, luggage and travel timing.',
    },
    {
      icon: MessageCircle,
      title: locale === 'es' ? 'Coordinación directa' : 'Direct coordination',
      detail:
        locale === 'es'
          ? 'Mensajes y confirmación cierran la historia sin saltar a una capa externa.'
          : 'Messages and confirmation close the story without pushing users into an external layer.',
    },
  ] as const;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          alt={editorialImages.howHero.alt[locale]}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={editorialImages.howHero.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,23,0.3)_0%,rgba(20,25,23,0.84)_100%)]" />
        <div className="page-grid relative z-10 flex min-h-[34rem] items-end py-14 text-white md:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--secondary)]">{dictionary.nav.howItWorks}</p>
            <h1 className="heading-balance mt-4 text-fluid-h1 font-black">
              {dictionary.howItWorks.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
              {dictionary.howItWorks.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="page-grid page-section">
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="surface-panel overflow-hidden rounded-[2rem]" key={step.title}>
                <div className="relative aspect-[5/4]">
                  <Image
                    alt={step.image.alt[locale]}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    src={step.image.src}
                  />
                </div>
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="eyebrow mt-4">
                    {locale === 'es' ? `Paso 0${index + 1}` : `Step 0${index + 1}`}
                  </p>
                  <h2 className="mt-3 text-2xl font-black text-[var(--foreground)]">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section bg-[rgba(255,255,255,0.56)]">
        <div className="page-grid">
          <div className="max-w-3xl">
            <p className="eyebrow">{dictionary.howItWorks.trustTitle}</p>
            <h2 className="heading-balance mt-4 text-fluid-h2 font-black text-[var(--foreground)]">
              {locale === 'es'
                ? 'No intenta parecer un mapa o una OTA. Se siente como una secuencia de viaje clara.'
                : 'It does not pretend to be a map or an OTA. It feels like a clear travel sequence.'}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="surface-panel rounded-[1.8rem] p-6" key={item.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-black text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <Image
          alt={editorialImages.nightOperations.alt[locale]}
          className="object-cover"
          fill
          sizes="100vw"
          src={editorialImages.nightOperations.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,23,0.36)_0%,rgba(20,25,23,0.86)_100%)]" />
        <div className="page-grid relative z-10 text-center text-white">
          <h2 className="heading-balance mx-auto max-w-3xl text-fluid-h2 font-black">
            {locale === 'es'
              ? 'El funnel está listo para demostrar claridad, no solo estética.'
              : 'The funnel is ready to demonstrate clarity, not only polish.'}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76">
            {locale === 'es'
              ? 'Explora la búsqueda, entra a una ficha y termina la reserva demo para ver la historia completa.'
              : 'Explore search, open a vehicle detail and finish the demo booking to see the full story.'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link className="btn-primary" href="/search">
              {dictionary.nav.search}
            </Link>
            <Link
              className="btn-outline border-white/30 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              href="/"
            >
              {locale === 'es' ? 'Volver al inicio' : 'Back home'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
