function Total({ tipPerPerson, totalPerPerson, resetHandler }) {
  return (
    <section className="flex flex-col bg-secondary-verydarkcyan p-6 text-primary rounded-[10px] lg:justify-between">
      <div className="lg:flex lg:flex-col lg:flex-1 lg:gap-y-8 lg:mt-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-white flex flex-col text-xs lg:text-sm">
            <span>Tip Amount</span>
            <span>/person</span>
          </p>

          <p className="text-3xl font-bold flex items-center lg:text-5xl">
            <span className="text-2xl mr-1">$</span>
            {tipPerPerson}
          </p>
        </div>

        <div className="flex justify-between items-center mb-3">
          <p className="text-white flex flex-col text-xs lg:text-sm">
            <span>Total</span>
            <span>/person</span>
          </p>

          <p className="text-3xl font-bold flex items-center lg:text-5xl">
            <span className="text-2xl mr-1">$</span>
            {totalPerPerson}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <input
          type="button"
          value={'reset'}
          onClick={resetHandler}
          className="bg-primary font-bold py-3 rounded text-2xl text-secondary-verydarkcyan uppercase w-full lg:text-3xl lg:py-2"
        />
      </div>
    </section>
  );
}
export default Total;
