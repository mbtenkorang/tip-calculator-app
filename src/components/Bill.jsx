import { useState } from 'react';

export default function Bill(props) {
  const { bill, input_bill } = props;
  //   console.log(props);
  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        type="float"
        value={bill}
        onChange={input_bill}
        placeholder={0.0}
      />
    </>
  );
}
