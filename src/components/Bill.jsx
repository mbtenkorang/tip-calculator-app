import { useState } from 'react';
import dollarLogo from '../assets/images/icon-dollar.svg';

export default function Bill({ bill, input_bill }) {
  const [isActive, setIsactive] = useState(false);
  return (
    <section className="pb-4">
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
          type="float"
          value={bill}
          onChange={input_bill}
          contentEditable={isActive}
          onClick={() => setIsactive((isActive) => !isActive)}
          placeholder={0}
          className="relative text-2xl flex items-end bg-secondary-verylightgraycyan rounded-sm text-secondary-verydarkcyan font-bold text-right px-4 py-2 w-full"
        />
      </div>
    </section>
  );
}
