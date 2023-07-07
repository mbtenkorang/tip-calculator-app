import { useState } from 'react';
import dollarLogo from '../assets/images/icon-dollar.svg';

export function Bill({ bill, input_bill }) {
  return (
    <section className="pb-2 mb-4">
      <label
        htmlFor="bill"
        className="text-xs"
      >
        Bill
      </label>
      <div>
        <span className="absolute z-[3] grid place-content-center pl-4 pt-4">
          <img
            src={dollarLogo}
            alt=""
            aria-hidden={true}
          />
        </span>
        <input
          name="bill"
          min={0}
          type="number"
          pattern={/\d+\.?\d{0,2}/}
          value={bill}
          required
          onChange={input_bill}
          placeholder={0}
          className="relative text-2xl flex items-end bg-secondary-verylightgraycyan rounded-sm text-secondary-verydarkcyan font-bold text-right px-4 py-2 w-full"
        />
      </div>
    </section>
  );
}
