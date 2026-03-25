'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef } from 'react';

import type { Locale, Vehicle } from '@/lib/types';
import { formatCurrency, getLocalizedText } from '@/lib/utils';

interface HomeHeroIntroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  children: ReactNode;
}

export function HomeHeroIntro({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  children,
}: HomeHeroIntroProps) {
  return (
    <section
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden text-white"
      data-testid="home-hero"
    >
      <div className="absolute inset-0">
        <Image
          alt="Premium car rental lifestyle in Orlando"
          className="h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="grain absolute inset-0" />

      <div className="page-grid relative flex min-h-[calc(100svh-4rem)] flex-col justify-end py-12 md:py-20">
        <motion.div
          animate="visible"
          className="max-w-3xl"
          initial="hidden"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.p
            className="eyebrow mb-5 text-[color:var(--accent-soft)]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className="font-display max-w-5xl text-[clamp(3rem,7vw,6.4rem)] leading-[0.95] tracking-[-0.03em]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-xl md:leading-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#18130f] transition hover:bg-[#f4e8dc] md:text-base"
              href="/search"
            >
              {primaryLabel}
            </Link>
            <Link
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 md:text-base"
              href="/how-it-works"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

interface StickyJourneyStoryProps {
  steps: {
    title: string;
    detail: string;
    image: string;
  }[];
}

export function StickyJourneyStory({ steps }: StickyJourneyStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0.62, 1]);

  return (
    <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" ref={containerRef}>
      <div className="lg:sticky lg:top-24 lg:h-[32rem]">
        <motion.div
          className="relative h-[26rem] overflow-hidden rounded-[2rem] lg:h-full"
          style={{ scale: imageScale }}
        >
          <Image
            alt={steps[0]?.title ?? 'Orlando travel delivery story'}
            className="h-full w-full object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={steps[0]?.image ?? ''}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#120e0b] via-[#120e0b]/35 to-transparent"
            style={{ opacity: imageOpacity }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="eyebrow text-[color:var(--accent-soft)]">Journey design</p>
            <p className="mt-3 max-w-md font-display text-3xl leading-tight">
              Airport, hotel and theme-park delivery become a narrative, not a footnote.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="space-y-6 lg:space-y-12">
        {steps.map((step, index) => (
          <motion.article
            className="surface-strong rounded-[1.75rem] p-7 md:p-9"
            initial={{ opacity: 0, y: 24 }}
            key={step.title}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, margin: '-15%' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="eyebrow">0{index + 1}</span>
            <h3 className="mt-4 font-display text-3xl leading-tight md:text-[2.2rem]">
              {step.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
              {step.detail}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

interface VehicleCardProps {
  locale: Locale;
  vehicle: Vehicle;
  ctaLabel: string;
  metaLabel: string;
  href: string;
}

export function VehicleCard({ locale, vehicle, ctaLabel, metaLabel, href }: VehicleCardProps) {
  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  return (
    <motion.article
      className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#fffaf4] shadow-[0_24px_60px_rgba(24,19,15,0.08)]"
      initial={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative overflow-hidden">
        <div className="absolute left-4 top-4 z-10 flex gap-2">
          {vehicle.instantBook ? (
            <span className="rounded-full bg-[#18130f]/82 px-3 py-1 text-xs font-semibold text-white">
              {metaLabel}
            </span>
          ) : null}
        </div>
        <button
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/24"
          type="button"
        >
          <Heart className="h-4 w-4" />
        </button>
        <motion.div transition={{ duration: 0.35 }} whileHover={{ scale: 1.04 }}>
          <Image
            alt={title}
            className="aspect-[4/3] w-full object-cover"
            height={680}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            src={vehicle.images[0]}
            width={920}
          />
        </motion.div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl leading-tight">{title}</h3>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {getLocalizedText(locale, vehicle.intro)}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Star className="h-4 w-4 fill-current text-[color:var(--accent)]" />
            {vehicle.rating}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
          <span className="rounded-full border border-black/10 px-3 py-1">
            {vehicle.seats} {locale === 'es' ? 'asientos' : 'seats'}
          </span>
          <span className="rounded-full border border-black/10 px-3 py-1">
            {vehicle.transmission}
          </span>
          <span className="rounded-full border border-black/10 px-3 py-1">{vehicle.fuelType}</span>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-black/8 pt-4">
          <div>
            <p className="text-sm text-[color:var(--muted)]">{vehicle.host.name}</p>
            <p className="text-xl font-semibold">
              {formatCurrency(vehicle.pricePerDay, locale)}
              <span className="text-sm font-medium text-[color:var(--muted)]">
                {' '}
                {locale === 'es' ? '/día' : '/day'}
              </span>
            </p>
          </div>
          <Link
            className="rounded-full bg-[#18130f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2b241e]"
            href={href}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
