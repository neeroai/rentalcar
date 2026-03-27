"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

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
    [fields.maxPrice, fields.rating, fields.seats],
  );

  return (
    <>
      <button
        className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#D4D4D4] bg-white px-4 py-2.5 text-sm font-medium text-[#231F20] shadow-sm transition-colors duration-150 hover:border-[#7C3AED] hover:text-[#7C3AED]"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <SlidersHorizontal className="h-4 w-4" />
        {labels.button}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-xl">
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-[#E5E5E5]" />
            </div>

            <div className="px-6 pb-8 pt-4">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#231F20]">Filters</h3>
                <button
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#E5E5E5] bg-white transition-colors duration-150 hover:border-[#7C3AED] hover:text-[#7C3AED]"
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
                  <span className="mb-2 block text-sm font-medium text-[#231F20]">
                    {labels.category}
                  </span>
                  <select
                    className="w-full cursor-pointer rounded-lg border border-[#D4D4D4] bg-white px-4 py-3 text-sm text-[#231F20] transition-colors duration-150 focus:border-[#7C3AED] focus:outline-none"
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
                    <span className="mb-2 block text-sm font-medium text-[#231F20]">
                      {labels.maxPrice}
                    </span>
                    <input
                      className="w-full rounded-lg border border-[#D4D4D4] bg-white px-4 py-3 text-sm transition-colors duration-150 focus:border-[#7C3AED] focus:outline-none"
                      defaultValue={formDefaults.maxPrice}
                      min="50"
                      name="maxPrice"
                      step="5"
                      type="number"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#231F20]">
                      {labels.seats}
                    </span>
                    <input
                      className="w-full rounded-lg border border-[#D4D4D4] bg-white px-4 py-3 text-sm transition-colors duration-150 focus:border-[#7C3AED] focus:outline-none"
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
                    <span className="mb-2 block text-sm font-medium text-[#231F20]">
                      {labels.transmission}
                    </span>
                    <select
                      className="w-full cursor-pointer rounded-lg border border-[#D4D4D4] bg-white px-4 py-3 text-sm transition-colors duration-150 focus:border-[#7C3AED] focus:outline-none"
                      defaultValue={fields.transmission}
                      name="transmission"
                    >
                      <option value="">Any</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#231F20]">
                      {labels.rating}
                    </span>
                    <select
                      className="w-full cursor-pointer rounded-lg border border-[#D4D4D4] bg-white px-4 py-3 text-sm transition-colors duration-150 focus:border-[#7C3AED] focus:outline-none"
                      defaultValue={formDefaults.rating}
                      name="rating"
                    >
                      <option value="0">Any</option>
                      <option value="4.7">4.7+</option>
                      <option value="4.9">4.9+</option>
                    </select>
                  </label>
                </div>

                <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[#D4D4D4] bg-white px-4 py-4 transition-colors duration-150 hover:border-[#7C3AED]">
                  <span className="text-sm font-medium text-[#231F20]">
                    {labels.delivery}
                  </span>
                  <input
                    className="h-4 w-4 cursor-pointer accent-[#7C3AED]"
                    defaultChecked={fields.delivery}
                    name="delivery"
                    type="checkbox"
                  />
                </label>

                <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[#D4D4D4] bg-white px-4 py-4 transition-colors duration-150 hover:border-[#7C3AED]">
                  <span className="text-sm font-medium text-[#231F20]">
                    {labels.airportPickup}
                  </span>
                  <input
                    className="h-4 w-4 cursor-pointer accent-[#7C3AED]"
                    defaultChecked={fields.airportPickup}
                    name="airportPickup"
                    type="checkbox"
                  />
                </label>

                <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[#D4D4D4] bg-white px-4 py-4 transition-colors duration-150 hover:border-[#7C3AED]">
                  <span className="text-sm font-medium text-[#231F20]">
                    {labels.instantBook}
                  </span>
                  <input
                    className="h-4 w-4 cursor-pointer accent-[#7C3AED]"
                    defaultChecked={fields.instantBook}
                    name="instantBook"
                    type="checkbox"
                  />
                </label>

                <button
                  className="w-full cursor-pointer rounded-lg bg-[#7C3AED] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#6D28D9]"
                  type="submit"
                >
                  {labels.apply}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
