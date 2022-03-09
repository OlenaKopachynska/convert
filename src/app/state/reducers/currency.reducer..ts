import {Action, createReducer, on} from '@ngrx/store';
import {
  convert,
  convertSuccess,
  loadRates,
  loadRatesSuccess
} from "../actions/currency.actions";

export interface State {
  amountFrom?: any,
  currencyFrom?: any,
  currencyTo?: any
  amountTo?: any,
  rates?: any,
  historical_rates?: any;
}

export const initialState: State = {
  amountFrom: undefined,
  currencyFrom: undefined,
  currencyTo: undefined,
  amountTo: undefined,
  rates: undefined,
  historical_rates: undefined
};

const _currencyReducer = createReducer(
  initialState,
  on(convert, (state, {amountFrom, currencyFrom, currencyTo}) => ({
    ...state,
    amountFrom: amountFrom,
    currencyFrom: currencyFrom,
    currencyTo: currencyTo
  })),
  on(convertSuccess, (state, {data}) => ({
    ...state,
    amountTo: data.result
  })),
  on(loadRates, (state, {currencyFrom, currencyTo}) => ({
    ...state,
    currencyFrom: currencyFrom,
    currencyTo: currencyTo
  })),
  on(loadRatesSuccess, (state, {rates}) => ({
    ...state,
    rates: rates
  })),
)

export function converterReducer(state: any, action: Action) {
  return _currencyReducer(state, action);
}
