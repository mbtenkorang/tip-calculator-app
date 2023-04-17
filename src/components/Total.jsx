import { Button } from './TipButton';

function Total() {
  // const details = {
  //   bill: 142.55,
  //   tip: 15,
  //   nofp: 5,
  // };
  // let { bill: x, tip: y, nofp: z } = details;

  // const calculateTip = (a, b, c) => {
  //   let tipPercent = b / 100;
  //   let tipPerPerson = (a * tipPercent) / c;
  //   return tipPerPerson;
  // };

  return (
    <section className="flex flex-col bg-secondary-verydarkcyan p-6 text-primary rounded-[10px]">
      <div className="flex justify-between items-center">
        <p className="flex flex-col">
          <span>Tip Amount</span>
          <span>/ person</span>
        </p>

        <p className="text-4xl font-bold">$ 4.27</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="flex flex-col">
          <span>Total</span>
          <span>/ person</span>
        </p>

        <p className="text-4xl font-bold">$32.79</p>
      </div>

      <div className="flex justify-center my-2">
        <button className="text-secondary-verydarkcyan text-2xl font-bold py-2 px-4 bg-secondary-graycyan rounded uppercase w-11/12 my-2">
          Reset
        </button>
      </div>
    </section>
  );
}
export default Total;
