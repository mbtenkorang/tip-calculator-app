import { useState } from 'react';
import './App.css';
import Bill from './components/Bill';
import TipButtons from './components/TipButton';
import { NumberOfPeople } from './components/NumberOfPeople';

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  function input_bill(e) {
    setBill((bill) => (bill = e.target.value));
  }

  let tip_list = [5, 10, 15, 25];

  function set_tip_value(e) {
    setTip((tip) => (tip = e.target.value));
  }

  function input_no_of_people(e) {
    setNumOfPeople((numOfPeople) => (numOfPeople = e.target.value));
  }

  function calculateTip() {
    let tip_per_person;
    if ((bill != 0 || undefined) && (numOfPeople != 0 || undefined)) {
      tip_per_person = (bill * (tip / 100)) / numOfPeople;
      setTipAmount((tipAmount) => (tipAmount = tip_per_person));
    } else {
      setTipAmount(0);
    }
    console.log(tip_per_person);
  }

  // calculateTip();

  // console.log(props);
  return (
    <>
      <h1>Splitter</h1>
      <Bill
        bill={bill}
        input_bill={input_bill}
      />
      <TipButtons
        tip={tip}
        tip_list={tip_list}
        set_tip_value={set_tip_value}
      />
      <NumberOfPeople
        numberOfPeople={numOfPeople}
        input_no_of_people={input_no_of_people}
      />

      <h3 onClick={calculateTip}>{tipAmount}</h3>
    </>
  );
}

export default App;
