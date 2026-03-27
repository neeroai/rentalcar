/**
 * @file page.tsx
 * @description Orlando-first homepage with image-led hero, curated browse sections and conversion-focused storytelling.
 * @module app/page
 * @exports HomePage
 */

import { ArrowRight, Car, MapPin, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HomeHeroIntro, VehicleCard } from '@/components/motion-ui';
import { ReviewHighlight, SearchHeroForm, SectionHeading } from '@/components/site-chrome';
import { editorialImages } from '@/data/assets';
import { vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { createQueryString } from '@/lib/utils';

const experiences = [
  {
    label: 'Llegadas MCO',
    labelEn: 'MCO arrivals',
    href: '/search?pickup=mco&category=compact-suv',
    image: editorialImages.experienceMco,
  },
  {
    label: 'Días de parques',
    labelEn: 'Park days',
    href: '/search?pickup=disney&category=minivan',
    image: editorialImages.experienceParks,
  },
  {
    label: 'Semana Epic + Universal',
    labelEn: 'Epic + Universal week',
    href: '/search?pickup=universal&category=compact-suv',
    image: editorialImages.experienceEpic,
  },
] as const;

const arrivalMoments = [
  {
    titleEs: 'Llegas a MCO',
    titleEn: 'You land at MCO',
    detailEs: 'Empiezas con un pickup claro, sin filas ni counter.',
    detailEn: 'You start with a clear pickup, no lines and no counter.',
  },
  {
    titleEs: 'Eliges el contexto real',
    titleEn: 'You choose the real context',
    detailEs: 'Hotel, Disney, Epic o Universal: el filtro parte del itinerario real.',
    detailEn: 'Hotel, Disney, Epic, or Universal: filtering starts from the real itinerary.',
  },
  {
    titleEs: 'Cierras con confianza',
    titleEn: 'You book with confidence',
    detailEs: 'Precio, host, entrega y políticas antes de confirmar.',
    detailEn: 'Price, host, delivery and policies before you confirm.',
  },
] as const;

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const featuredVehicles = vehicles.slice(0, 6);
  const totalTrips = vehicles.reduce((sum, vehicle) => sum + vehicle.tripsCount, 0);
  const avgRating = (
    vehicles.reduce((sum, vehicle) => sum + vehicle.rating, 0) / vehicles.length
  ).toFixed(2);
  const totalHosts = new Set(vehicles.map((vehicle) => vehicle.host.name)).size;

  const searchDefaults = {
    pickup: 'mco',
    start: '2026-04-18',
    end: '2026-04-22',
    time: '10:00',
  };

  const stats = [
    {
      icon: Users,
      value: new Intl.NumberFormat(locale === 'es' ? 'es-CO' : 'en-US').format(totalTrips),
      label: dictionary.home.trustTripsCount,
    },
    {
      icon: ShieldCheck,
      value: avgRating,
      label: dictionary.home.trustRating,
    },
    {
      icon: Car,
      value: new Intl.NumberFormat(locale === 'es' ? 'es-CO' : 'en-US').format(totalHosts),
      label: dictionary.home.trustHostsCount,
    },
  ] as const;

  return (
    <>
      <HomeHeroIntro locale={locale} />

      <div className="page-grid relative z-10 -mt-10 pb-8 md:-mt-16 md:pb-0">
        <SearchHeroForm defaults={searchDefaults} dictionary={dictionary} locale={locale} />
      </div>

      <section className="page-section">
        <div className="page-grid grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeading
            eyebrow={dictionary.home.convenienceTitle}
            subtitle={dictionary.home.convenienceSubtitle}
            title={
              locale === 'es'
                ? 'La experiencia se construye desde el destino, no desde la categoría del carro.'
                : 'The experience is shaped by the destination, not by a generic car category.'
            }
          />

          <div className="grid gap-4 md:grid-cols-3">
            {dictionary.home.valueProps.map((item, index) => (
              <article
                className="surface-elevated rounded-[1.7rem] p-5"
                key={item.title}
              >
                <p className="eyebrow">
                  {locale === 'es' ? `Clave 0${index + 1}` : `Key 0${index + 1}`}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-grid grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Link
            className="group relative min-h-[32rem] overflow-hidden rounded-[2rem]"
            href={`/search?${createQueryString({ ...searchDefaults, pickup: 'mco' })}`}
          >
            <Image
              alt={editorialImages.homeOrlando.alt[locale]}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              src={editorialImages.homeOrlando.src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,23,0.12)_0%,rgba(20,25,23,0.78)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="eyebrow text-[var(--secondary)]">
                {locale === 'es' ? 'Destino principal' : 'Primary market'}
              </p>
              <h2 className="mt-3 text-fluid-h2 font-black">Orlando</h2>
              <p className="mt-3 max-w-lg text-base leading-7 text-white/76">
                {locale === 'es'
                  ? 'Familias LATAM, semanas de parques, hoteles y resorts: el producto tiene que sentirse como parte del viaje desde que sales de MCO.'
                  : 'LATAM families, park-week stays, hotels, and resorts: the product should feel like part of the trip from the moment you leave MCO.'}
              </p>
            </div>
          </Link>

          <div className="grid gap-6">
            <Link
              className="group relative min-h-[15rem] overflow-hidden rounded-[2rem]"
              href={`/search?${createQueryString({ ...searchDefaults, pickup: 'mia' })}`}
            >
              <Image
                alt={editorialImages.homeMiami.alt[locale]}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                src={editorialImages.homeMiami.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
                  {locale === 'es' ? 'Mercado secundario' : 'Secondary market'}
                </p>
                <h3 className="mt-2 text-2xl font-black">Miami</h3>
                <p className="mt-2 text-sm text-white/72">
                  {locale === 'es'
                    ? 'Solo como extensión para viajes combinados, sin competir con la narrativa principal de Orlando.'
                    : 'Only as an extension for split-destination trips, without competing with the main Orlando story.'}
                </p>
              </div>
            </Link>

            <div className="surface-panel rounded-[2rem] p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                <MapPin className="h-4 w-4" />
                {locale === 'es' ? 'Contexto de llegada' : 'Arrival context'}
              </div>
              <ul className="mt-5 space-y-4">
                {arrivalMoments.map((moment) => (
                  <li
                    className="border-b border-[rgba(198,184,163,0.38)] pb-4 last:border-b-0 last:pb-0"
                    key={moment.titleEs}
                  >
                    <p className="text-lg font-semibold text-[var(--foreground)]">
                      {locale === 'es' ? moment.titleEs : moment.titleEn}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {locale === 'es' ? moment.detailEs : moment.detailEn}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-[linear-gradient(180deg,rgba(255,255,255,0.52)_0%,rgba(255,250,242,0.82)_100%)]">
        <div className="page-grid">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={dictionary.home.browseByExperience}
              subtitle={dictionary.home.categoriesSubtitle}
              title={dictionary.home.categoriesTitle}
            />
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
              href="/search"
            >
              {dictionary.actions.exploreCars}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {experiences.map((experience) => (
              <Link className="group relative overflow-hidden rounded-[1.8rem]" href={experience.href} key={experience.href}>
                <div className="relative aspect-[4/5]">
                  <Image
                    alt={experience.image.alt[locale]}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={experience.image.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                      {locale === 'es' ? 'Explora' : 'Browse'}
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {locale === 'es' ? experience.label : experience.labelEn}
                    </h3>
                    <p className="mt-2 max-w-[18rem] text-sm leading-6 text-white/72">
                      {locale === 'es'
                        ? 'Arranca desde un momento real del viaje, no desde un filtro frío.'
                        : 'Start from a real travel moment, not from a cold generic filter.'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-grid">
          <SectionHeading
            eyebrow={locale === 'es' ? 'Flota destacada' : 'Featured fleet'}
            subtitle={
              locale === 'es'
                ? 'Vehículos listos para itinerarios familiares, semanas Epic + Universal y estadías en resort.'
                : 'Vehicles ready for family itineraries, Epic + Universal weeks, and resort stays.'
            }
            title={
              locale === 'es'
                ? 'Elige un auto que ya viene con contexto de viaje.'
                : 'Choose a car that already comes with trip context.'
            }
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard
                href={`/vehicle/${vehicle.slug}?${createQueryString({ ...searchDefaults, slug: vehicle.slug })}`}
                key={vehicle.slug}
                locale={locale}
                vehicle={vehicle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(223,245,243,0.62)_100%)]">
        <div className="page-grid grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ReviewHighlight
            detail={
              locale === 'es'
                ? 'Todo el flujo está diseñado para que una familia LATAM que aterriza en MCO entienda entrega, equipaje, host y contexto de parques sin perder tiempo.'
                : 'The entire flow is designed so a LATAM family landing at MCO understands delivery, luggage, host context, and park logistics without wasting time.'
            }
            image={editorialImages.homeQuote.src}
            name={locale === 'es' ? 'Viajera demo · familia LATAM' : 'Demo traveler · LATAM family'}
            quote={
              locale === 'es'
                ? 'Se siente como una experiencia de viaje real, no como un catálogo genérico.'
                : 'It feels like a real travel experience, not a generic listing catalog.'
            }
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="surface-panel flex items-center gap-4 rounded-[1.6rem] p-5"
                  key={item.label}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-3xl font-black tracking-[-0.05em] text-[var(--foreground)]">
                      {item.value}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-grid">
          <SectionHeading
            eyebrow={dictionary.nav.howItWorks}
            subtitle={dictionary.home.howTitle}
            title={
              locale === 'es'
                ? 'Tres pasos para pasar de llegada a reserva confirmada.'
                : 'Three steps from arrival to confirmed booking.'
            }
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dictionary.home.howSteps.map((step, index) => (
              <article
                className="rounded-[1.8rem] border border-[rgba(198,184,163,0.52)] bg-white p-6 shadow-[var(--shadow-sm)]"
                key={step.title}
              >
                <p className="eyebrow">
                  {locale === 'es' ? `Paso 0${index + 1}` : `Step 0${index + 1}`}
                </p>
                <h3 className="mt-3 text-xl font-black text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.detail}</p>
              </article>
            ))}
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
          <p className="eyebrow text-[var(--secondary)]">
            {locale === 'es' ? 'Listo para demo' : 'Ready for demo'}
          </p>
          <h2 className="heading-balance mx-auto mt-4 max-w-3xl text-fluid-h2 font-black">
            {dictionary.home.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74">
            {dictionary.home.finalSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link className="btn-primary" href="/search">
              {dictionary.actions.search}
            </Link>
            <Link
              className="btn-outline border-white/30 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              href="/how-it-works"
            >
              {dictionary.nav.howItWorks}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
