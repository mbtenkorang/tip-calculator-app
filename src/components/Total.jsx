import dollarLogo from '../assets/images/icon-dollar.svg';

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
    <section className="flex flex-col bg-secondary-verydarkcyan p-6 text-primary rounded-[10px] lg:justify-between">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white flex flex-col">
          <span>Tip Amount</span>
          <span>/ person</span>
        </p>

        <p className="text-4xl font-bold">$ 4.27</p>
      </div>

      <div className="flex justify-between items-center mb-2">
        <p className="text-white flex flex-col">
          <span>Total</span>
          <span>/ person</span>
        </p>

        <p className="text-4xl font-bold flex items-center">
          <span className="text-2xl mr-1">$</span>
          32.79
        </p>
      </div>

      <div className="flex justify-center my-2">
        <button className="text-secondary-verydarkcyan text-2xl font-bold py-2 px-4 bg-secondary-graycyan rounded uppercase w-full my-1">
          Reset
        </button>
      </div>
    </section>
  );
}
export default Total;
