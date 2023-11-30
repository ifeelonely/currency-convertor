import { useState, useEffect } from 'react';
import { currencyItemInterface } from '../components/currencyItem/CurrencyItemInterface';

interface apiResponceInterface {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  TimeStamp: string;
  Valute: {
    [key: string]: any;
  };
}

const BASE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const useCurrency = () => {
  const [currencyLoadedList, setCurrencyLoadedList] =
    useState<apiResponceInterface>();
  const [valutes, setValutes] = useState<currencyItemInterface[]>([
    {
      CharCode: '',
      Name: '',
      ID: '',
      NumCode: '',
      Nominal: 0,
      Value: 0,
    },
  ]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function getCurrencyList() {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setCurrencyLoadedList(data);
        setValutes(Object.values(data.Valute));
        setIsLoaded(true);
      } catch (error: any) {
        setError(error.message);
        setIsLoaded(false);
        console.error(error.message);
      }
    }
    getCurrencyList();
  }, []);

  return { currencyLoadedList, error, valutes, isLoaded, setValutes };
};

export { useCurrency };
