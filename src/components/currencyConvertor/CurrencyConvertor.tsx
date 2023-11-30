import React, { useState, useMemo, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import CurrencyList from '../currencyList/CurrencyList';
import styles from './CurrencyConvertor.module.css';
import { useCurrency } from '../../hooks/useCurrency';
import useConvertionHistory from '../../hooks/useConvertionHistory';
import CurrencySelect from '../currencySelect/CurrencySelect';
import ConvertionHistory from '../convertionHistory/ConvertionHistory';

const CurrencyConvertor: React.FC = () => {
  const {
    currencyLoadedList,
    isLoaded,
    error,
    valutes: initialValutes,
  } = useCurrency();
  const {
    item: items,
    getLocalStorageItem,
    setLocalStorageItem,
  } = useConvertionHistory();
  const [currentCurrency, setCurrentCurrency] = useState<string>('');

  const calculatedByCurrentCurrency = useMemo(() => {
    if (currentCurrency) {
      const newBaseCurrencyValue =
        currencyLoadedList?.Valute[currentCurrency].Value;
      return initialValutes.map((valute) => ({
        ...valute,
        Value: +(valute.Value / newBaseCurrencyValue).toFixed(4),
      }));
    } else return initialValutes;
  }, [currentCurrency, initialValutes, currencyLoadedList?.Valute]);

  const handleOnChangeBaseCurrency = (e: any) => {
    setCurrentCurrency((state) => e.target.value);
    setLocalStorageItem('convertions', e.target.value);
  };

  useEffect(() => {
    getLocalStorageItem('convertions');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCurrency]);

  if (error)
    return (
      <div>
        There was an error loading data! Please refresh the page({error})
      </div>
    );

  if (!isLoaded)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <div className={styles.currencyConvertor}>
      <div className={styles.currencyConvertorInner}>
        <CurrencySelect
          options={initialValutes}
          selectValue={currentCurrency}
          onChange={handleOnChangeBaseCurrency}
        />
        <CurrencyList currencyList={calculatedByCurrentCurrency} />
      </div>
      <ConvertionHistory items={items} />
    </div>
  );
};

export default CurrencyConvertor;
