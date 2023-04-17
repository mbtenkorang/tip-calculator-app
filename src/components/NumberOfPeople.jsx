import personIcon from '../assets/images/icon-person.svg';

function NumberOfPeople({ numberOfPeople, input_no_of_people }) {
  return (
    <section className="pb-4 mb-4">
      <label htmlFor="number_of_people">Number Of People</label>
      <div className="flex items-end">
        <span className="absolute z-[3] flex items-center pl-4 pt-4">
          <img
            src={personIcon}
            alt=""
            aria-hidden={true}
          />
        </span>
        <input
          type={'number'}
          value={numberOfPeople}
          onChange={input_no_of_people}
          placeholder={0}
          className="relative bg-secondary-verylightgraycyan rounded-sm w-full text-2xl text-secondary-verydarkcyan font-bold text-right p-4"
        />
      </div>
    </section>
  );
}

export { NumberOfPeople };
