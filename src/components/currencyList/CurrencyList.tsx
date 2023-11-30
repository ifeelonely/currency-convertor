import React from 'react';
import { CurrencyListInterface } from './CurrencyListInterface';
import CurrencyItem from '../currencyItem/CurrencyItem';
import styles from './CurrencyList.module.css';

const CurrencyList: React.FC<CurrencyListInterface> = ({
  currencyList,
}) => {
  return (
    <div className={styles.currencyListContainer}>
      <div className={styles.currencyHeader}>
        <div>Favourites</div>
        <div>Currency</div>
        <div>Amount</div>
        <div>Char code</div>
        <div>Rate</div>
      </div>
      <div className={styles.currencyList}>
        {currencyList.map((currency) => (
          <CurrencyItem
            key={currency.ID}
            {...currency}
            ID={currency.ID}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencyList;
