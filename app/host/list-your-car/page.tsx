/**
 * @file host/list-your-car/page.tsx
 * @description Host onboarding wizard page — clean white wrapper over the HostOnboardingWizard.
 * @module app/host/list-your-car
 * @exports HostListYourCarPage
 */

import { HostOnboardingWizard } from "@/components/host-tools";
import { getDictionary, getLocale } from "@/lib/i18n";

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
    <div className="page-grid py-10">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
          {dictionary.nav.host}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#231F20]">
          {dictionary.host.wizardTitle}
        </h1>
        <p className="mt-2 text-base leading-relaxed text-[#6B7280]">
          {locale === "es"
            ? "Completa los pasos para publicar tu auto en la plataforma."
            : "Complete the steps to list your car on the platform."}
        </p>
      </div>

      <div className="mt-8">
        <HostOnboardingWizard locale={locale} />
      </div>
    </div>
  );
}
