'use client';

import { useTransition } from 'react';

import type { Locale } from '@/lib/types';

interface LocaleToggleProps {
  locale: Locale;
  label: string;
}

export function LocaleToggle({ locale, label }: LocaleToggleProps) {
  const [isPending, startTransition] = useTransition();

  function handleToggle() {
    const nextLocale = locale === 'es' ? 'en' : 'es';

    startTransition(() => {
      document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
      window.location.reload();
    });
  }

  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/16 disabled:opacity-60 md:text-[0.95rem]"
      onClick={handleToggle}
      type="button"
      disabled={isPending}
    >
      <span className="text-white/65">{locale.toUpperCase()}</span>
      <span>{label}</span>
    </button>
  );
}
