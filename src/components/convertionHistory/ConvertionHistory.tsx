import React from 'react';
import { ConvertionHistoriInterface } from './ConvertionHistoryInterface';
import styles from './ConvertionHistory.module.css';

const ConvertionHistory: React.FC<ConvertionHistoriInterface> = ({ items }) => {
  return (
    <div>
      <h3>Conversion history:</h3>
      <div className={styles.items}>
        {items.length
          ? items.map((item, indx) =>
              item ? (
                <p key={item + indx}>
                  {item}
                </p>
              ) : null
            )
          : 'No convertions yet!'}
      </div>
    </div>
  );
};

export default ConvertionHistory;
