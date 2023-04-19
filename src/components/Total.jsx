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
      <div className="lg:flex lg:flex-col lg:flex-1 lg:gap-y-8 lg:mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-white flex flex-col text-xs">
            <span>Tip Amount</span>
            <span>/ person</span>
          </p>

          <p className="text-4xl font-bold flex items-center">
            <span className="text-2xl mr-1">$</span> 4.27
          </p>
        </div>

        <div className="flex justify-between items-center mb-2">
          <p className="text-white flex flex-col text-xs">
            <span>Total</span>
            <span>/ person</span>
          </p>

          <p className="text-4xl font-bold flex items-center">
            <span className="text-2xl mr-1">$</span>
            32.79
          </p>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <button className="bg-primary font-bold my-1 py-2 px-4 rounded text-2xl text-secondary-verydarkcyan uppercase w-full lg:text-3xl lg:py-2">
          Reset
        </button>
      </div>
    </section>
  );
}
export default Total;
