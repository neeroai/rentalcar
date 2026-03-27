/**
 * @file host/list-your-car/page.tsx
 * @description Host onboarding wizard page with updated Orlando-first wrapper.
 * @module app/host/list-your-car
 * @exports HostListYourCarPage
 */

import { HostOnboardingWizard } from '@/components/host-tools';
import { getDictionary, getLocale } from '@/lib/i18n';

/**
 * Host listing onboarding page. Renders the multi-step wizard in a clean white layout.
 *
 * @returns Full-page server component with wizard.
 *
 * @example
 * // Rendered automatically at /host/list-your-car
 */
export default async function HostListYourCarPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <div className="page-grid page-section">
      <div className="surface-panel rounded-[2rem] p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="eyebrow">{dictionary.nav.host}</p>
          <h1 className="heading-balance mt-4 text-fluid-h2 font-black text-[var(--foreground)]">
            {dictionary.host.wizardTitle}
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            {locale === 'es'
              ? 'Completa los pasos para publicar tu auto con contexto de entrega, disponibilidad y señal visual coherente con Orlando.'
              : 'Complete the steps to publish your car with delivery context, availability and imagery aligned with Orlando.'}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <HostOnboardingWizard locale={locale} />
      </div>
    </div>
  );
}
