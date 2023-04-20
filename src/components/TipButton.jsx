export function Button({ value, handleClick }) {
  return (
    <input
      min={0}
      required
      type="button"
      value={value + '%'}
      onClick={handleClick}
      className="text-white text-3xl font-bold py-2 bg-secondary-verydarkcyan rounded"
    ></input>
  );
}

export function TipButtons(props) {
  const { tip_list, set_tip_value } = props;

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
    <section className="grid gap-3 grid-cols-2 pb-2 mb-4 lg:mb-2 lg:pb-2">
      <h3 className="col-span-2 text-xs">Select Tip %</h3>
      {tip_buttons}
      <input
        min={0}
        className="border border-secondary-lightgraycyan px-4 py-2 rounded-sm text-2xl mt-1 text-center uppercase"
        type="number"
        placeholder={'Custom'}
        onChange={set_tip_value}
      />
    </section>
  );
}
