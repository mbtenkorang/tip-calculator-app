import { useState } from 'react';
import Header from './components/Header';
import { Bill } from './components/Bill';
import { NumberOfPeople } from './components/NumberOfPeople';
import { TipButtons } from './components/TipButton';
import Total from './components/Total';
import './index.css';

function App() {
  const [values, setValues] = useState({
    bill: 0,
    tip: '0',
    numOfPeople: 0,
  });

  const TIP_LIST = [5, 10, 15, 25, 50];

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  /**
   * @returns resets the values for bill, tip and number of people
   */
  const handleReset = () => {
    setValues(
      (values) => (values = { ...values, bill: 0, tip: '0', numOfPeople: 0 })
    );
  };

  /**
   *
   * @returns tip amount per person and total per person
   */
  const totals = () => {
    let tipPerPerson;
    let totalBillPerPerson;
    let [bill, tip, noP] = Object.values(values);

    // formatting tip value
    if (tip.endsWith('%')) {
      const re = /\%/;
      tip = Number(tip.replace(re, ''));
    } else {
      tip = Number(tip);
    }

    if (noP > 0) {
      tipPerPerson = (bill * (tip / 100)) / noP;
      totalBillPerPerson = bill / noP + tipPerPerson;
    } else {
      tipPerPerson = '0.00';
      totalBillPerPerson = '0.00';
    }

    return { tipPerPerson, totalBillPerPerson };
  };

  let result = totals();

  return (
    <>
      <Header />
      <div className="rounded-t-2xl bg-white p-8 md:max-w-xl lg:grid lg:gap-x-2 lg:grid-cols-2 lg:rounded-2xl lg:max-w-4xl">
        <form>
          {/* Bill amount component */}
          <Bill
            bill={values.bill}
            input_bill={handleChange('bill')}
          />
          {/* Tip percent component */}
          <TipButtons
            tip={values.tip}
            tip_list={TIP_LIST}
            set_tip_value={handleChange('tip')}
          />
          {/* Number of people component */}
          <NumberOfPeople
            numberOfPeople={values.numOfPeople}
            input_no_of_people={handleChange('numOfPeople')}
          />
        </form>
        {/* Total component */}
        <Total
          tipPerPerson={Number(result.tipPerPerson).toFixed(2)}
          totalPerPerson={Number(result.totalBillPerPerson).toFixed(2)}
          resetHandler={(event) => handleReset(event)}
        />
      </div>
    </>
  );
}

export default App;
