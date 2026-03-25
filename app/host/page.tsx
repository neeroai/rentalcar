import { ArrowRight, CarFront, PlaneTakeoff, Wallet } from 'lucide-react';
import Link from 'next/link';

import { EarningsCalculator } from '@/components/host-tools';
import { PageIntro } from '@/components/site-chrome';
import { getDictionary, getLocale } from '@/lib/i18n';

export default async function HostPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const benefits = [
    {
      icon: PlaneTakeoff,
      title:
        locale === 'es'
          ? 'Demanda anclada a viajes reales'
          : 'Demand anchored to real travel plans',
      detail:
        locale === 'es'
          ? 'MCO, resorts y hoteles premium crean puntos naturales de demanda.'
          : 'MCO, resorts and premium hotels create natural demand anchors.',
    },
    {
      icon: Wallet,
      title:
        locale === 'es'
          ? 'Pricing claro para flotas y hosts'
          : 'Clear pricing for fleets and hosts',
      detail:
        locale === 'es'
          ? 'El producto favorece autos bien posicionados, no guerras de precio.'
          : 'The product favors well-positioned cars, not price wars.',
    },
    {
      icon: CarFront,
      title:
        locale === 'es' ? 'Experiencia de entrega como ventaja' : 'Delivery as a product advantage',
      detail:
        locale === 'es'
          ? 'Hotel, aeropuerto y parques entran como parte del listing.'
          : 'Hotel, airport and theme-park handoffs are built into the listing itself.',
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Host side"
        subtitle={dictionary.host.subtitle}
        title={dictionary.host.title}
      />

      <section className="page-grid space-y-10 pb-16 md:space-y-14 md:pb-20">
        <div className="overflow-hidden rounded-[2.2rem] bg-[#18130f] p-6 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="eyebrow text-[color:var(--accent-soft)]">{dictionary.host.benefits}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
                {locale === 'es'
                  ? 'La propuesta no es “poner un auto online”, sino construir una experiencia de llegada.'
                  : 'The pitch is not just “list a car online”, but to build a full arrival experience.'}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#18130f]"
                href="/host/list-your-car"
              >
                {dictionary.host.listYourCar}
              </Link>
              <Link
                className="rounded-full border border-white/16 px-6 py-3 text-sm font-semibold"
                href="/search"
              >
                Browse guest side
              </Link>
            </div>
          </div>
        </div>

        <EarningsCalculator locale={locale} title={dictionary.host.calculator} />

        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="surface-strong rounded-[1.8rem] p-6 md:p-8" key={benefit.title}>
                <Icon className="h-5 w-5 text-[var(--accent)]" />
                <h2 className="mt-5 font-display text-3xl leading-tight">{benefit.title}</h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {benefit.detail}
                </p>
              </article>
            );
          })}
        </div>

        <div className="surface-strong rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow">Onboarding preview</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl">{dictionary.host.wizardTitle}</h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                {locale === 'es'
                  ? 'Fotos, pricing, disponibilidad y revisión final en un wizard demo listo para presentaciones.'
                  : 'Photos, pricing, availability and final review sit inside a demo wizard ready for presentations.'}
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
              href="/host/list-your-car"
            >
              {dictionary.host.listYourCar}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
