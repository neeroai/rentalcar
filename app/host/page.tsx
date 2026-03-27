/**
 * @file host/page.tsx
 * @description Host landing page reframed around Orlando demand, delivery coverage and operational simplicity.
 * @module app/host
 * @exports HostPage
 */

import { Bell, CalendarDays, Camera, Clock, DollarSign, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { EarningsCalculator } from '@/components/host-tools';
import { SectionHeading } from '@/components/site-chrome';
import { editorialImages } from '@/data/assets';
import { getDictionary, getLocale } from '@/lib/i18n';

export default async function HostPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const benefits = [
    {
      icon: DollarSign,
      title: locale === 'es' ? 'Demanda visible desde Orlando' : 'Visible Orlando demand',
      detail:
        locale === 'es'
          ? 'La narrativa del producto se apoya en MCO, hoteles, resorts, family travel y semanas Epic/Universal.'
          : 'The product story is anchored in MCO, hotels, resorts, family travel, and Epic/Universal weeks.',
    },
    {
      icon: Shield,
      title: locale === 'es' ? 'Más claridad para el huésped' : 'More clarity for guests',
      detail:
        locale === 'es'
          ? 'Precio, entrega y host se explican antes de reservar, lo que mejora confianza y reduce fricción.'
          : 'Price, handoff and host context are explained before booking, improving trust and reducing friction.',
    },
    {
      icon: Clock,
      title: locale === 'es' ? 'Operación simple' : 'Simple operation',
      detail:
        locale === 'es'
          ? 'El demo conecta messaging, confirmación y calendario sin sobrecargar la experiencia.'
          : 'The demo connects messaging, confirmation and calendar without overloading the experience.',
    },
  ] as const;

  const listingSteps = [
    {
      icon: Camera,
      number: '01',
      title: locale === 'es' ? 'Muestra tu auto con contexto' : 'Show your car with context',
      detail:
        locale === 'es'
          ? 'Exterior, interior y una imagen de entrega real para hoteles o aeropuerto.'
          : 'Exterior, interior and one real handoff image for hotels or airport pickup.',
    },
    {
      icon: CalendarDays,
      number: '02',
      title: locale === 'es' ? 'Define zonas y disponibilidad' : 'Set zones and availability',
      detail:
        locale === 'es'
          ? 'MCO, Disney, Epic, Universal o downtown según el tipo de itinerario que quieres captar.'
          : 'MCO, Disney, Epic, Universal, or downtown depending on the itinerary you want to capture.',
    },
    {
      icon: Bell,
      number: '03',
      title: locale === 'es' ? 'Activa una operación clara' : 'Activate a clear operation',
      detail:
        locale === 'es'
          ? 'Recibe notificaciones, coordina rápido y mantén la historia del viaje visible.'
          : 'Receive notifications, coordinate quickly and keep the trip story visible.',
    },
  ] as const;

  return (
    <>
      <section className="page-grid pt-8 md:pt-10">
        <div className="surface-panel overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <p className="eyebrow">{dictionary.nav.host}</p>
              <h1 className="heading-balance mt-4 text-fluid-h1 font-black text-[var(--foreground)]">
                {locale === 'es'
                  ? 'Publica vehículos pensados para el tipo de viaje que domina Orlando.'
                  : 'List vehicles designed for the kind of trip Orlando actually drives.'}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                {dictionary.host.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="btn-primary" href="/host/list-your-car">
                  {dictionary.host.listYourCar}
                </Link>
                <Link className="btn-outline" href="/search">
                  {dictionary.nav.search}
                </Link>
              </div>
            </div>

            <div className="relative min-h-[22rem]">
              <Image
                alt={editorialImages.hostHero.alt[locale]}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={editorialImages.hostHero.src}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-grid">
          <SectionHeading
            eyebrow={dictionary.host.benefits}
            subtitle={
              locale === 'es'
                ? 'El lado host debe sentirse igual de claro que el lado guest.'
                : 'The host side should feel as clear as the guest side.'
            }
            title={
              locale === 'es'
                ? 'Por qué este MVP genera una mejor primera impresión.'
                : 'Why this MVP creates a stronger first impression.'
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="surface-panel rounded-[1.8rem] p-6" key={benefit.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-xl font-black text-[var(--foreground)]">
                    {benefit.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{benefit.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-[rgba(255,255,255,0.56)]">
        <div className="page-grid">
          <SectionHeading
            eyebrow={dictionary.host.calculator}
            subtitle={
              locale === 'es'
                ? 'La calculadora no vende humo: aterriza ocupación y tarifa a un número directo.'
                : 'The calculator avoids fluff and turns occupancy plus rate into one direct forecast.'
            }
            title={
              locale === 'es'
                ? 'Modela un escenario de ingresos con foco Orlando.'
                : 'Model a revenue scenario around Orlando demand.'
            }
          />
          <div className="mt-10">
            <EarningsCalculator locale={locale} title={dictionary.host.calculator} />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-grid">
          <SectionHeading
            eyebrow={locale === 'es' ? 'Proceso simple' : 'Simple process'}
            subtitle={
              locale === 'es'
                ? 'El lado host también debe contar una historia operativa clara.'
                : 'The host side also needs to tell a clear operational story.'
            }
            title={dictionary.host.wizardTitle}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {listingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="surface-panel rounded-[1.8rem] p-6" key={step.number}>
                  <p className="eyebrow">{step.number}</p>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-xl font-black text-[var(--foreground)]">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.detail}</p>
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,23,0.38)_0%,rgba(20,25,23,0.88)_100%)]" />
        <div className="page-grid relative z-10 text-center text-white">
          <h2 className="heading-balance mx-auto max-w-3xl text-fluid-h2 font-black">
            {locale === 'es'
              ? 'Lista tu auto con una historia más fuerte desde la primera vista.'
              : 'List your car with a stronger story from the first view.'}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76">
            {dictionary.host.title}
          </p>
          <div className="mt-8">
            <Link className="btn-primary" href="/host/list-your-car">
              {dictionary.host.listYourCar}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
