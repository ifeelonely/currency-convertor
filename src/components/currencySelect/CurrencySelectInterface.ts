import { currencyItemInterface } from "../currencyItem/CurrencyItemInterface";


export interface CurrencySelectInterface {
  options: currencyItemInterface[];
  selectValue: string;
  onChange: any;
}