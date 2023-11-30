import React, { useState } from 'react';
import { currencyItemInterface } from './CurrencyItemInterface';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styles from './CurrencyItem.module.css';

const CurrencyItem: React.FC<currencyItemInterface> = ({
  CharCode,
  Name,
  Value,
  Nominal,
}) => {
  const [filledStar, setIsFilledStar] = useState<boolean>(false);
  return (
    <div className={styles.currencyItem}>
      <div onClick={() => setIsFilledStar(!filledStar)}>
        {filledStar ? (
          <StarIcon sx={{ fontSize: '3rem' }} className={styles.star} />
        ) : (
          <StarBorderIcon sx={{ fontSize: '3rem' }} className={styles.star} />
        )}
      </div>
      <div>{Name}</div>
      <div>{Nominal}</div>
      <div>{CharCode}</div>
      <div>{Value}</div>
    </div>
  );
};

export default CurrencyItem;
