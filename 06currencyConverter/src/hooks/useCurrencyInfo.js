import { useEffect, useState } from "react";

// standard practice to add 'use' with hook name

const useCurrencyInfo = function (currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((resJSON) => setData(resJSON[currency]));
  }, [currency]);
  console.log("hook", data);
  return data;
};

export default useCurrencyInfo;
