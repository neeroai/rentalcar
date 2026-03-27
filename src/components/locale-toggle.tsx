'use client';

import { Globe } from 'lucide-react';
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
      className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 rounded-full border border-[rgba(198,184,163,0.55)] bg-white/80 px-3 text-sm font-medium text-[var(--text-soft)] transition-colors duration-150 hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:opacity-60"
      onClick={handleToggle}
      type="button"
      disabled={isPending}
    >
      <Globe className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}
