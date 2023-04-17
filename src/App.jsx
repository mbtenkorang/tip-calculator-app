import { Fragment, useState } from 'react';
import Header from './components/Header';
import Bill from './components/Bill';
import { NumberOfPeople } from './components/NumberOfPeople';
import { TipButtons } from './components/TipButton';
import './index.css';
import Total from './components/Total';

function App() {
  const [values, setValues] = useState({
    bill: '',
    tip: '',
    numberOfPersons: '',
  });

  const tip_list = [5, 10, 15, 25, 50];

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // console.log(values);

  return (
    <Fragment>
      <Header />
      <div className="border rounded-t-[20px] bg-white p-8">
        <Bill
          bill={values.bill}
          input_bill={handleChange('bill')}
        />

        <TipButtons
          tip={values.tip}
          tip_list={tip_list}
          set_tip_value={handleChange('tip')}
        />
        <NumberOfPeople
          numberOfPeople={values.numberOfPersons}
          input_no_of_people={handleChange('numberOfPersons')}
        />
        <Total />
      </div>
    </Fragment>
  );
}

export default App;
