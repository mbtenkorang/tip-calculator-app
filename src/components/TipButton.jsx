export function Button({ value, handleClick }) {
  return (
    <button
      value={value}
      onClick={handleClick}
      className="text-white text-2xl font-bold py-2 px-4 bg-secondary-verydarkcyan rounded"
    >
      {value + '%'}
    </button>
  );
}

export function TipButtons(props) {
  const { tip, tip_list, set_tip_value } = props;

  const tip_buttons = tip_list.map((el, index) => {
    let key = '01' + index;
    return (
      <Button
        key={key}
        value={tip_list[index]}
        handleClick={set_tip_value}
      />
    );
  });

  return (
    <section className="grid gap-3 grid-cols-2 pb-4 mb-4">
      <h3 className="col-span-2">Select Tip %</h3>
      {tip_buttons}
      <input
        className="border border-secondary-lightgraycyan rounded-sm px-4 py-2 text-2xl mt-1 text-right"
        type={'text'}
        placeholder="Custom"
        onChange={set_tip_value}
        defaultValue={tip}
      />
    </section>
  );
}
