import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    mode: 'readings', // default mode
    lastReading: '',
    curReading: '',
    units: ''
  });

  const [result, setResult] = useState('');

  const fixedCost = 350.0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { mode, lastReading, curReading, units } = formData;

    let unitsUsed = 0.0;
    let totalCost = 0.0;

    if (mode === 'readings') {
      if (lastReading === '' || curReading === '') {
        setResult('Please enter both readings.');
        return;
      }

      const last = Number(lastReading);
      const current = Number(curReading);

      if (current < last) {
        setResult('This month reading must be greater than or equal to last month reading.');
        return;
      }

      unitsUsed = current - last;
      //output= `Mode: Readings\nLast Reading: ${last}\nCurrent Reading: ${current}\nUnits Used: ${unitsUsed}`;
    } else {
      if (units === '' || Number(units) < 0) {
        setResult('Please enter a valid number of units.');
        return;
      }
      unitsUsed = Number(units);
      //output= `Mode: Units\nUnits Used: ${units}`;
    }

    if (unitsUsed <= 20) {
      totalCost = fixedCost + unitsUsed * 5.0;
    } else if (unitsUsed <= 50) {
      totalCost = fixedCost + 20 * 5.0 + (unitsUsed - 20) * 7.0;
    } else {
      totalCost = fixedCost + 20 * 5.0 + 30 * 7.0 + (unitsUsed - 50) * 10.0;
    }
 
    setResult(
        <div className="p-4 shadow-sm font-poppins border-[2px] rounded-md border-gray-300">
          <h2 className="text-lg font-semibold mb-2 text-gray-600">Bill Summary</h2>
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-sm">Mode:</span> {mode === 'readings' ? 'Readings' : 'Units'}
            </p>
            <p>
              <span className="text-sm">Units Used:</span> {unitsUsed}
            </p>
            <p>
              <span className="text-sm">Fixed Cost:</span> Rs.{fixedCost.toFixed(2)}
            </p>
            <p>
              <span className="text-sm">Total Cost:</span> Rs.{totalCost.toFixed(2)}
            </p>
          </div>
        </div>
      );
    // setResult(formattedBill);

    //setResult(totalCost);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen font-poppins bg-gray-50">
      <div className="flex bg-gray-200 shadow-lg py-10 px-5 border-[1px] rounded-2xl justify-center w-[30vw] max-w-[400px]">
      

        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <h className="font-wixMadefor font-bold text-2xl text-gray-600 text-center">Electricity Bill Calculator</h>
          <div className="flex flex-col items-center mt-4 p-2 border-[2px] rounded-md border-gray-300">
            <p className="text-xs font-semibold text-gray-500 mb-2 font-serif">Select input mode:</p>
            <div className="flex gap-15 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mode"
                  value="readings"
                  checked={formData.mode === 'readings'}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span className="">Readings</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mode"
                  value="units"
                  checked={formData.mode === 'units'}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span className="">Units</span>
              </label>
            </div>
          </div>

          {formData.mode === 'readings' && (
            <div className='flex flex-col gap-4 w-full'>
              <div className="mx-5 mt-4">
                <label htmlFor="lastReading" className="block text-sm pb-2">
                  Enter last month reading
                </label>
                <input
                  type="number"
                  id="lastReading"
                  placeholder='Last Reading'
                  name="lastReading"
                  value={formData.lastReading}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-3 py-2 border-[1px] boarder-grey-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-poppins"
                />
              </div>

              <div className="mx-5 mt-4 mb-8">
                <label htmlFor="curReading" className="block text-sm pb-2">
                  Enter this month reading
                </label>
                <input
                  type="number"
                  id="curReading"
                  placeholder='Current Reading'
                  name="curReading"
                  value={formData.curReading}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-3 py-2 border-[1px] boarder-grey-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-poppins"
                />
              </div>
            </div>
          )}

          {formData.mode === 'units' && (
            <div className="mx-5 mt-4 mb-8">
              <label htmlFor="units" className="block text-sm pb-2">
                Enter number of units
              </label>
              <input
                type="number"
                id="units"
                name="units"
                value={formData.units}
                onChange={handleChange}
                required
                className="w-full text-sm px-3 py-2 border-[1px] boarder-grey-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-poppins"
              />
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-sm">
              Calculate
            </button>
            <div className="pt-5 text-center">
            {result}
        </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
