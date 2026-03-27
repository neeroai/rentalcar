/**
 * @file not-found.tsx
 * @description Global 404 not found page with car icon, large decorative number, and CTA.
 * @module app/not-found
 * @exports NotFound
 */

import { Car } from "lucide-react";
import Link from "next/link";

/**
 * 404 Not Found page with decorative number, heading, description, and home CTA.
 *
 * @returns Centered not-found page element.
 *
 * @example
 * // Rendered automatically by Next.js for unmatched routes
 */
export default function NotFound() {
  return (
    <section className="page-grid flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      {/* Car icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE9FE]">
        <Car className="h-7 w-7 text-[#7C3AED]" />
      </div>

      {/* Decorative 404 */}
      <p className="mt-6 text-9xl font-bold leading-none text-[#EDE9FE] select-none">
        404
      </p>

      {/* Heading */}
      <h1 className="-mt-4 text-3xl font-bold text-[#231F20]">
        Página no encontrada
      </h1>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-[#6B7280]">
        Esta ruta no existe en el prototipo. Solo las fichas de autos del demo
        están disponibles.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <Link
          className="inline-flex min-h-[44px] cursor-pointer items-center rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
          href="/"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
