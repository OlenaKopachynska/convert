import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from '../reducers/currency.reducer.'

export const state = createFeatureSelector<State>('converter');

export const ratesSelector = createSelector(state, (state) => state.rates)

export const amountToSelector = createSelector(state, (state) => state.amountTo)

export const formSelector = createSelector(state, (state) => state)

