import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {amountToSelector, formSelector} from "../../state/selectors/currency.selectors";
import {convert} from "../../state/actions/currency.actions";

@Component({
  selector: 'app-convertor-form',
  templateUrl: './convertor-form.component.html',
  styleUrls: ['./convertor-form.component.css']
})
export class ConvertorFormComponent implements OnInit {

  ammountFrom: any
  currencyFrom: any = "USD"
  currencyTo: any = "EUR"
  ammountTo: any
  valueFromForm: any
  rates: any

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.select(amountToSelector).subscribe(val => this.ammountTo = val)
    this.store.select(formSelector).subscribe(val => this.valueFromForm = val)
  }

  onAmmountFrom(e: any) {
    this.ammountFrom = e.target.value;
  }

  onCurrencyFrom(e: any) {
    this.currencyFrom = e.target.value;
  }

  onCurrencyTo(e: any) {
    this.currencyTo = e.target.value;
  }

  onClickBtn() {

    if (this.currencyFrom && this.ammountFrom && this.currencyTo) {
      this.store.dispatch(convert({
        amountFrom: this.ammountFrom,
        currencyFrom: this.currencyFrom,
        currencyTo: this.currencyTo
      }));
    }
  }

  onReverse() {
    this.currencyFrom = this.valueFromForm.currencyTo
    this.currencyTo = this.valueFromForm.currencyFrom

    this.store.dispatch(convert({
      amountFrom: this.ammountFrom,
      currencyFrom: this.currencyFrom,
      currencyTo: this.currencyTo
    }));

  }

  ngOnDestroy(): void {
  }
}
