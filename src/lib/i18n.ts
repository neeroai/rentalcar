import { cookies } from 'next/headers';

import { dictionaries } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/types';

const DEFAULT_LOCALE: Locale = 'es';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'es' || value === 'en';
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get('locale')?.value;

  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getIntlLocale(locale: Locale) {
  return locale === 'es' ? 'es-419' : 'en-US';
}
