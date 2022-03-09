import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, mergeMap} from "rxjs";
import {
  convert,
  convertSuccess,
  loadRates, loadRatesSuccess
} from "../actions/currency.actions";
import {CurrencyService} from "../../currency.service";

@Injectable()
export class CurrencyEffects {

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {
  }

  convertSum = createEffect(() => this.actions$.pipe(
    ofType(convert),
    mergeMap((action) =>
      this.currencyService.convAmmount(action.amountFrom, action.currencyFrom, action.currencyTo).pipe(
        map(
          (data) => {
            return convertSuccess({data})
          }
        )
      )
    )
  ))

  loadHistoricalRates = createEffect(() => this.actions$.pipe(
    ofType(loadRates),
    mergeMap((action) =>
      this.currencyService.getHistoricalRates(action.currencyFrom, action.currencyTo).pipe(
        map(
          (rates) => {
            return loadRatesSuccess({rates})
          }
        )
      )
    )
  ))


}
