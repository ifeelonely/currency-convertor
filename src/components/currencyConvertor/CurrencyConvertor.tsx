import React, { useState, useMemo } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from '@mui/material';
import CurrencyList from '../currencyList/CurrencyList';
import styles from './CurrencyConvertor.module.css';
import { useCurrency } from '../../hooks/useCurrency';
import { currencyItemInterface } from '../currencyItem/CurrencyItemInterface';

const CurrencyConvertor: React.FC = () => {
  const {
    currencyLoadedList,
    isLoaded,
    error,
    valutes: initialValutes,
  } = useCurrency();
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

  const handleOnChangeBaseCurrency = (e: any) =>
    setCurrentCurrency(e.target.value);

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
      {isLoaded ? (
        <FormControl style={{ width: '100%', maxWidth: '20rem' }}>
          <InputLabel id="select">Base Currency</InputLabel>
          <Select
            id="select"
            label="base"
            value={currentCurrency}
            onChange={handleOnChangeBaseCurrency}
          >
            {initialValutes.map((valute: currencyItemInterface) => (
              <MenuItem value={valute.CharCode} key={valute.ID}>
                {valute.Name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      <CurrencyList currencyList={calculatedByCurrentCurrency} />
    </div>
  );
};

export default CurrencyConvertor;
