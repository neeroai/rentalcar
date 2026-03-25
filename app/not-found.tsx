import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-grid py-24">
      <div className="surface-strong max-w-2xl rounded-[2rem] p-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl">This vehicle is not available in the demo.</h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          The route exists only when it maps to one of the fictional mock vehicles in the prototype.
        </p>
        <Link
          className="mt-6 inline-flex rounded-full bg-[#18130f] px-5 py-3 text-sm font-semibold text-white"
          href="/search"
        >
          Return to search
        </Link>
      </div>
    </section>
  );
}
