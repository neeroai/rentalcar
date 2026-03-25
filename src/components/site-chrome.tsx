import { Calendar, ChevronRight, Mail, MapPin, MessageSquareMore, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { LocaleToggle } from '@/components/locale-toggle';
import { pickupOptions, vehicleCategories } from '@/data/mock';
import type { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { formatShortDate, getLocalizedText } from '@/lib/utils';

type Dictionary = ReturnType<typeof getDictionary>;

interface SiteHeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const navItems = [
    { href: '/search', label: dictionary.nav.search },
    { href: '/how-it-works', label: dictionary.nav.howItWorks },
    { href: '/host', label: dictionary.nav.host },
    { href: '/account/trips', label: dictionary.nav.trips },
    { href: '/account/messages', label: dictionary.nav.messages },
    { href: '/account/wishlist', label: dictionary.nav.wishlist },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-[#15100ccc] text-white backdrop-blur-xl">
      <div className="page-grid flex h-16 items-center justify-between gap-6">
        <Link className="font-display text-2xl tracking-[-0.04em]" href="/">
          {dictionary.brand}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="hidden rounded-full border border-white/14 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/8 md:inline-flex"
            href="/host/list-your-car"
          >
            {dictionary.actions.becomeHost}
          </Link>
          <LocaleToggle label={dictionary.actions.switchLocale} locale={locale} />
        </div>
      </div>
    </header>
  );
}

interface SiteFooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const links = [
    { href: '/search', label: dictionary.nav.search },
    { href: '/how-it-works', label: dictionary.nav.howItWorks },
    { href: '/host', label: dictionary.nav.host },
  ];

  return (
    <footer className="border-t border-black/8 bg-[#18130f] py-12 text-white">
      <div className="page-grid grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-display text-4xl tracking-[-0.04em]">{dictionary.brand}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/68">
            {dictionary.footer.tagline}
          </p>
          <p className="mt-6 text-sm text-white/45">{dictionary.footer.note}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">Navigate</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">Demo mode</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>{locale === 'es' ? 'Sin pagos reales' : 'No real payments'}</li>
              <li>{locale === 'es' ? 'Sin backend real' : 'No real backend'}</li>
              <li>{locale === 'es' ? 'Sin auth real' : 'No real authentication'}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SearchHeroFormProps {
  locale: Locale;
  dictionary: Dictionary;
  defaults?: {
    pickup?: string;
    start?: string;
    end?: string;
    time?: string;
    category?: string;
  };
  action?: string;
}

export function SearchHeroForm({
  locale,
  dictionary,
  defaults,
  action = '/search',
}: SearchHeroFormProps) {
  const pickupDefault = defaults?.pickup ?? 'mco';
  const startDefault = defaults?.start ?? '2026-04-18';
  const endDefault = defaults?.end ?? '2026-04-22';
  const timeDefault = defaults?.time ?? '10:00';
  const categoryDefault = defaults?.category ?? '';

  return (
    <form
      action={action}
      className="surface-strong grid gap-4 rounded-[2rem] p-4 text-[#18130f] md:grid-cols-[1.2fr_1fr_1fr_0.9fr_auto] md:items-end md:p-5"
      method="get"
    >
      <FieldGroup
        icon={<MapPin className="h-4 w-4" />}
        label={locale === 'es' ? 'Pickup' : 'Pickup'}
      >
        <select
          className="w-full bg-transparent text-sm font-medium"
          defaultValue={pickupDefault}
          name="pickup"
        >
          {pickupOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {getLocalizedText(locale, option.label)}
            </option>
          ))}
        </select>
      </FieldGroup>
      <FieldGroup
        icon={<Calendar className="h-4 w-4" />}
        label={locale === 'es' ? 'Inicio' : 'Start'}
      >
        <input
          className="w-full bg-transparent text-sm font-medium"
          defaultValue={startDefault}
          name="start"
          type="date"
        />
      </FieldGroup>
      <FieldGroup icon={<Calendar className="h-4 w-4" />} label={locale === 'es' ? 'Fin' : 'End'}>
        <input
          className="w-full bg-transparent text-sm font-medium"
          defaultValue={endDefault}
          name="end"
          type="date"
        />
      </FieldGroup>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
        <FieldGroup label={locale === 'es' ? 'Hora' : 'Time'}>
          <input
            className="w-full bg-transparent text-sm font-medium"
            defaultValue={timeDefault}
            name="time"
            type="time"
          />
        </FieldGroup>
        <FieldGroup label={locale === 'es' ? 'Categoría' : 'Category'}>
          <select
            className="w-full bg-transparent text-sm font-medium"
            defaultValue={categoryDefault}
            name="category"
          >
            <option value="">{locale === 'es' ? 'Cualquiera' : 'Any type'}</option>
            {vehicleCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {getLocalizedText(locale, category.label)}
              </option>
            ))}
          </select>
        </FieldGroup>
      </div>
      <button
        className="inline-flex h-14 items-center justify-center rounded-full bg-[#18130f] px-6 text-sm font-semibold text-white transition hover:bg-[#2d261f] md:h-16"
        data-testid="home-search-submit"
        type="submit"
      >
        {dictionary.actions.search}
      </button>
    </form>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)] md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="page-grid py-10 md:py-16">
      <SectionHeading eyebrow={eyebrow} subtitle={subtitle} title={title} />
    </section>
  );
}

export function ReviewHighlight({
  image,
  name,
  quote,
  detail,
}: {
  image: string;
  name: string;
  quote: string;
  detail: string;
}) {
  return (
    <article className="surface-strong overflow-hidden rounded-[2rem]">
      <div className="grid md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-64">
          <Image
            alt={name}
            className="h-full w-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            src={image}
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
            <Star className="h-4 w-4 fill-current" />
            4.9 / 5
          </div>
          <p className="mt-4 font-display text-3xl leading-tight">{quote}</p>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{detail}</p>
          <p className="mt-6 text-sm font-semibold">{name}</p>
        </div>
      </div>
    </article>
  );
}

export function BookingSummaryStrip({
  locale,
  start,
  end,
  pickup,
}: {
  locale: Locale;
  start: string;
  end: string;
  pickup: string;
}) {
  return (
    <div
      className="surface-strong sticky top-20 z-20 flex flex-wrap items-center justify-between gap-4 rounded-[1.4rem] px-5 py-4"
      data-testid="search-summary"
    >
      <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
        <span className="rounded-full border border-black/10 px-3 py-1">{pickup}</span>
        <span className="rounded-full border border-black/10 px-3 py-1">
          {formatShortDate(start, locale)}
        </span>
        <span className="rounded-full border border-black/10 px-3 py-1">
          {formatShortDate(end, locale)}
        </span>
      </div>
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#18130f]"
        href="/account/messages"
      >
        <MessageSquareMore className="h-4 w-4" />
        WhatsApp-style host coordination
      </Link>
    </div>
  );
}

export function AccountShell({
  locale,
  dictionary,
  current,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  current: 'trips' | 'messages' | 'wishlist';
  children: ReactNode;
}) {
  const items = [
    { href: '/account/trips', label: dictionary.nav.trips, key: 'trips', icon: Calendar },
    { href: '/account/messages', label: dictionary.nav.messages, key: 'messages', icon: Mail },
    { href: '/account/wishlist', label: dictionary.nav.wishlist, key: 'wishlist', icon: Star },
  ] as const;

  return (
    <section className="page-grid py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[17rem_1fr]">
        <aside className="surface-strong rounded-[1.75rem] p-4">
          <p className="eyebrow">Account mock</p>
          <nav className="mt-5 space-y-2">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = current === item.key;

              return (
                <Link
                  className={`flex items-center justify-between rounded-[1.2rem] px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-[#18130f] text-white' : 'text-[#18130f] hover:bg-black/5'
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 rounded-[1.4rem] bg-[#f4ece2] p-4 text-sm text-[color:var(--muted)]">
            {locale === 'es'
              ? 'Cuenta simulada para demostrar viajes, mensajes y guardados.'
              : 'Simulated account used to showcase trips, messages and saved cars.'}
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}

function FieldGroup({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="block rounded-[1.3rem] border border-black/10 bg-[#fcf8f2] px-4 py-3">
      <span className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
        {icon}
        {label}
      </span>
      {children}
    </div>
  );
}
