import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const Currency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  //https://api.frankfurter.app/currencies
  //https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertCurrency = () => {};

  const handleFavorites = (currency) => {};

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
   };

  //console.log(currencies);
  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center ">
        <div className="container">
      <div className="max-w-xl bg-white rounded-lg shadow-md mx-auto my-10 p-5 ">
        <h2 className="mb-5 text-2xl font-semibold text-gray-700">
          Currency Converter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <Dropdown
            currencies={currencies}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            title="From: "
            handleFavorites={handleFavorites}
          />
          <div className="flex justify-center -mb-5 sm:mb-0">
            <button onClick={swapCurrencies} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">swap</button>
          </div>

          <Dropdown
            currencies={currencies}
            currency={toCurrency}
            setCurrency={setToCurrency}
            title="To: "
            handleFavorites={handleFavorites}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount:
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
            type="number"
          />
        </div>

        <div className="flex justify-end mt-6 ">
          <button
            onClick={convertCurrency}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Convert
          </button>
        </div>

        <div className="mt-4 text-lg font-medium text-right text-green-600">
          Converted Amount : 69 USD
        </div>
      </div>
    </div>
    </div>
  );
};
export default Currency;
