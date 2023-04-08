function NumberOfPeople({ numberOfPeople, input_no_of_people }) {
  return (
    <div>
      <label htmlFor="number_of_people">Number Of People</label>
      <input
        type={'number'}
        value={numberOfPeople}
        onChange={input_no_of_people}
        placeholder={0}
      />
    </div>
  );
}

export { NumberOfPeople };
