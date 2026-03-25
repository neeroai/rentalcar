'use client';

import { SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';

interface MobileFilterDrawerProps {
  action: string;
  hiddenFields?: Record<string, string>;
  fields: {
    category: string;
    maxPrice: number;
    seats: number;
    transmission: string;
    delivery: boolean;
    airportPickup: boolean;
    instantBook: boolean;
    rating: number;
    sort: string;
  };
  labels: {
    button: string;
    category: string;
    maxPrice: string;
    seats: string;
    transmission: string;
    delivery: string;
    airportPickup: string;
    instantBook: string;
    rating: string;
    apply: string;
  };
}

export function MobileFilterDrawer({
  action,
  hiddenFields,
  fields,
  labels,
}: MobileFilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formDefaults = useMemo(
    () => ({
      maxPrice: String(fields.maxPrice),
      seats: String(fields.seats),
      rating: String(fields.rating),
    }),
    [fields.maxPrice, fields.rating, fields.seats]
  );

  return (
    <>
      <button
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fffaf4] px-4 py-2 text-sm font-semibold text-[#18130f] shadow-sm"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <SlidersHorizontal className="h-4 w-4" />
        {labels.button}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-[#18130f]/50 backdrop-blur-md">
          <div className="absolute inset-x-0 bottom-0 rounded-t-[2rem] bg-[#f8f2ea] p-6 shadow-[0_-30px_80px_rgba(24,19,15,0.2)]">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-3xl">Filters</h3>
              <button
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form action={action} className="space-y-4" method="get">
              {Object.entries(hiddenFields ?? {}).map(([key, value]) => (
                <input key={key} name={key} type="hidden" value={value} />
              ))}
              <label className="block">
                <span className="mb-2 block text-sm font-medium">{labels.category}</span>
                <select
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3"
                  defaultValue={fields.category}
                  name="category"
                >
                  <option value="">All</option>
                  <option value="suv">SUV</option>
                  <option value="convertible">Convertible</option>
                  <option value="luxury">Luxury</option>
                  <option value="economy">Economy</option>
                  <option value="van">Van</option>
                  <option value="business">Business</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">{labels.maxPrice}</span>
                  <input
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3"
                    defaultValue={formDefaults.maxPrice}
                    min="50"
                    name="maxPrice"
                    step="5"
                    type="number"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">{labels.seats}</span>
                  <input
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3"
                    defaultValue={formDefaults.seats}
                    min="0"
                    name="seats"
                    step="1"
                    type="number"
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">{labels.transmission}</span>
                  <select
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3"
                    defaultValue={fields.transmission}
                    name="transmission"
                  >
                    <option value="">Any</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">{labels.rating}</span>
                  <select
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3"
                    defaultValue={formDefaults.rating}
                    name="rating"
                  >
                    <option value="0">Any</option>
                    <option value="4.7">4.7+</option>
                    <option value="4.9">4.9+</option>
                  </select>
                </label>
              </div>
              <label className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-4">
                <span>{labels.delivery}</span>
                <input defaultChecked={fields.delivery} name="delivery" type="checkbox" />
              </label>
              <label className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-4">
                <span>{labels.airportPickup}</span>
                <input defaultChecked={fields.airportPickup} name="airportPickup" type="checkbox" />
              </label>
              <label className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-4">
                <span>{labels.instantBook}</span>
                <input defaultChecked={fields.instantBook} name="instantBook" type="checkbox" />
              </label>
              <button
                className="w-full rounded-full bg-[#18130f] px-5 py-3 text-sm font-semibold text-white"
                type="submit"
              >
                {labels.apply}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
