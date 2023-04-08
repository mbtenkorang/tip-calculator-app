import { useState } from 'react';

function Button({ value, handleClick }) {
  return (
    <button
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function TipButtons(props) {
  const { tip, tip_list, set_tip_value } = props;
  //   console.log(props);

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

  //   console.log(tip);
  return (
    <>
      <p>Tip</p>
      {tip_buttons}
      <input
        type={'text'}
        placeholder="Custom"
        onChange={set_tip_value}
        defaultValue={tip}
      />
    </>
  );
}
