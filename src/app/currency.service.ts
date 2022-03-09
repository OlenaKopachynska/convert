import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  convAmmount(amountFrom: any, currencyFrom: any, currencyTo: any): Observable<any> {
    return this.http.get<any>(`https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${amountFrom}`)
  }

  getHistoricalRates(currencyFrom: any, currencyTo: any): Observable<any> {

    let a = this.http.get<any>(`https://api.exchangerate.host/2020-01-01?symbols=${currencyFrom},${currencyTo}`)
    let b = this.http.get<any>(`https://api.exchangerate.host/2020-02-02?symbols=${currencyFrom},${currencyTo}`)
    let c = this.http.get<any>(`https://api.exchangerate.host/2020-03-03?symbols=${currencyFrom},${currencyTo}`)
    let d = this.http.get<any>(`https://api.exchangerate.host/2020-04-04?symbols=${currencyFrom},${currencyTo}`)
    let e = this.http.get<any>(`https://api.exchangerate.host/2020-05-05?symbols=${currencyFrom},${currencyTo}`)

    let arr = [a,b,c,d,e]

   return of(arr)

  }

}
