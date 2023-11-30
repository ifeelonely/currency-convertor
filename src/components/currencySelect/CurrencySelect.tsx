import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { CurrencySelectInterface } from './CurrencySelectInterface';
import { currencyItemInterface } from '../currencyItem/CurrencyItemInterface';

const CurrencySelect: React.FC<CurrencySelectInterface> = ({
  selectValue,
  onChange,
  options,
}) => {
  return (
    <FormControl style={{ width: '100%', maxWidth: '20rem' }}>
      <InputLabel id="select">Base Currency</InputLabel>
      <Select id="select" label="base" value={selectValue} onChange={onChange}>
        {options.map((valute: currencyItemInterface) => (
          <MenuItem value={valute.CharCode} key={valute.ID}>
            {valute.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelect;
