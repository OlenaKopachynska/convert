import {createAction, props} from '@ngrx/store';

export const convert = createAction('[Counter Component] convert', props<{ amountFrom: any, currencyFrom: any, currencyTo: any }>());
export const convertSuccess = createAction('[Counter Component] convertSeccess', props<{ data: any }>());

export const loadRates = createAction('[Counter Component] loadRates', props<{currencyFrom: any, currencyTo: any }>());
export const loadRatesSuccess = createAction('[Counter Component] loadRatesSuccess', props<{ rates: any }>());

export const loadHistoricalRates = createAction('[Counter Component] loadHistoricalRates', props<{ cur_from: any, cur_to: any }>());
export const loadHistoricalRatesSuccess = createAction('[Counter Component] loadHistoricalRates', props<{ historical_rates: any }>());

export const changeAmmountFrom = createAction('[Counter Component] changeAmmountFrom', props<{ amountFrom: any }>());
