import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { useCallback, useEffect } from "react";

const currencyArray = [
  {
    currency: "BLUR",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.20811525423728813,
  },
  { currency: "bNEO", date: "2023-08-29T07:10:50.000Z", price: 7.1282679 },
  { currency: "BUSD", date: "2023-08-29T07:10:40.000Z", price: 0.999183113 },
  {
    currency: "BUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.9998782611186441,
  },
  { currency: "USD", date: "2023-08-29T07:10:30.000Z", price: 1 },
  {
    currency: "ETH",
    date: "2023-08-29T07:10:52.000Z",
    price: 1645.9337373737374,
  },
  {
    currency: "GMX",
    date: "2023-08-29T07:10:40.000Z",
    price: 36.345114372881355,
  },
  {
    currency: "STEVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.07276706779661017,
  },
  {
    currency: "LUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.40955638983050846,
  },
  {
    currency: "RATOM",
    date: "2023-08-29T07:10:40.000Z",
    price: 10.250918915254237,
  },
  {
    currency: "STRD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.7386553389830508,
  },
  {
    currency: "EVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.06246181355932203,
  },
  {
    currency: "IBCX",
    date: "2023-08-29T07:10:40.000Z",
    price: 41.26811355932203,
  },
  {
    currency: "IRIS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.0177095593220339,
  },
  {
    currency: "ampLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.49548589830508477,
  },
  { currency: "KUJI", date: "2023-08-29T07:10:45.000Z", price: 0.675 },
  { currency: "STOSMO", date: "2023-08-29T07:10:45.000Z", price: 0.431318 },
  { currency: "USDC", date: "2023-08-29T07:10:40.000Z", price: 0.989832 },
  { currency: "axlUSDC", date: "2023-08-29T07:10:40.000Z", price: 0.989832 },
  {
    currency: "ATOM",
    date: "2023-08-29T07:10:50.000Z",
    price: 7.186657333333334,
  },
  {
    currency: "STATOM",
    date: "2023-08-29T07:10:45.000Z",
    price: 8.512162050847458,
  },
  {
    currency: "OSMO",
    date: "2023-08-29T07:10:50.000Z",
    price: 0.3772974333333333,
  },
  { currency: "rSWTH", date: "2023-08-29T07:10:40.000Z", price: 0.00408771 },
  {
    currency: "STLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.44232210169491526,
  },
  {
    currency: "LSI",
    date: "2023-08-29T07:10:50.000Z",
    price: 67.69661525423729,
  },
  {
    currency: "OKB",
    date: "2023-08-29T07:10:40.000Z",
    price: 42.97562059322034,
  },
  {
    currency: "OKT",
    date: "2023-08-29T07:10:40.000Z",
    price: 13.561577966101694,
  },
  {
    currency: "SWTH",
    date: "2023-08-29T07:10:45.000Z",
    price: 0.004039850455012084,
  },
  { currency: "USC", date: "2023-08-29T07:10:40.000Z", price: 0.994 },
  { currency: "USDC", date: "2023-08-29T07:10:30.000Z", price: 1 },
  { currency: "USDC", date: "2023-08-29T07:10:30.000Z", price: 1 },
  {
    currency: "USDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.9998782611186441,
  },
  {
    currency: "WBTC",
    date: "2023-08-29T07:10:52.000Z",
    price: 26002.82202020202,
  },
  {
    currency: "wstETH",
    date: "2023-08-29T07:10:40.000Z",
    price: 1872.2579742372882,
  },
  {
    currency: "YieldUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 1.0290847966101695,
  },
  {
    currency: "ZIL",
    date: "2023-08-29T07:10:50.000Z",
    price: 0.01651813559322034,
  },
];

interface IFormInput {
  sendAmount: string;
  sendCurrencyIndex: number;
  receiveAmount: string;
  receiveCurrencyIndex: number;
}

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { defaultValues, errors },
  } = useForm<IFormInput>({
    defaultValues: {
      sendAmount: "1",
      sendCurrencyIndex: 0,
      receiveAmount: "0",
      receiveCurrencyIndex: 1,
    },
  });

  const findPrice = (currencyIndex: number) => {
    const entry = currencyArray[currencyIndex];
    return entry ? entry.price : null;
  };

  const convertCurrency = useCallback(
    (amount: number, from: number, to: number) => {
      const fromPrice = findPrice(from);
      const toPrice = findPrice(to);

      if (fromPrice === null || toPrice === null) {
        return "Currency not found.";
      }

      const convertedAmount = (amount * fromPrice) / toPrice;
      return convertedAmount;
    },
    []
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { sendAmount, sendCurrencyIndex, receiveCurrencyIndex } = data;
    const receiveAmount = convertCurrency(
      Number(sendAmount),
      sendCurrencyIndex,
      receiveCurrencyIndex
    );

    setValue("receiveAmount", String(receiveAmount));
  };

  useEffect(
    function () {
      const receiveAmount = convertCurrency(
        Number(defaultValues?.sendAmount) || 1,
        defaultValues?.sendCurrencyIndex || 0,
        defaultValues?.receiveCurrencyIndex || 1
      );
      setValue("receiveAmount", String(receiveAmount));
    },
    [
      convertCurrency,
      defaultValues?.receiveCurrencyIndex,
      defaultValues?.sendAmount,
      defaultValues?.sendCurrencyIndex,
      setValue,
    ]
  );

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h5>Swap</h5>
        <div className="form-group">
          <label>Amount to send</label>
          <input {...register("sendAmount", { required: true })} />
          {errors.sendAmount && <span>This field is required</span>}
          <div className="select-container">
            <img
              src={`/tokens/${
                currencyArray[watch("sendCurrencyIndex")].currency
              }.svg`}
              className="currency-icon"
            />
            <select
              {...register("sendCurrencyIndex")}
              defaultValue={defaultValues?.sendCurrencyIndex}
            >
              {currencyArray.map((currency, index) => (
                <option value={index} key={index}>
                  {currency.currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Amount to receive</label>
          <input disabled {...register("receiveAmount")} />
          <div className="select-container">
            <img
              src={`/tokens/${
                currencyArray[watch("receiveCurrencyIndex")].currency
              }.svg`}
              className="currency-icon"
            />
            <select
              {...register("receiveCurrencyIndex")}
              defaultValue={defaultValues?.receiveCurrencyIndex}
            >
              {currencyArray.map((currency, index) => (
                <option value={index} key={index}>
                  {currency.currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit">CONFIRM SWAP</button>
      </form>
    </div>
  );
};

export default App;
