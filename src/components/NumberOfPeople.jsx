import personIcon from '../assets/images/icon-person.svg';

function NumberOfPeople({ numberOfPeople, input_no_of_people }) {
  return (
    <section className="mb-4 pb-2">
      <label
        htmlFor="number_of_people"
        className="text-xs"
      >
        Number Of People
      </label>
      <div className="flex items-center">
        <span className="absolute z-[3] flex items-center pl-4 pt-1">
          <img
            src={personIcon}
            alt=""
            aria-hidden={true}
          />
        </span>
        <input
          name="persons"
          min={0}
          required={true}
          type={'number'}
          value={numberOfPeople}
          onChange={input_no_of_people}
          placeholder={0}
          className="relative bg-secondary-verylightgraycyan rounded-sm w-full text-2xl text-secondary-verydarkcyan font-bold text-right px-4 py-2 hover:cursor-pointer"
        />
      </div>
    </section>
  );
}

export { NumberOfPeople };
