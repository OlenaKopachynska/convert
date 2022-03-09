import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {loadRates} from "../../state/actions/currency.actions";
import {ratesSelector} from "../../state/selectors/currency.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() currencyFrom: any
  @Input() currencyTo: any

  a: any = ["Jan", -7.06, 1.2]
  b: any = ["Feb", 6.9, 1.9]
  c: any = ["Mar", 9.5, 1.8]
  d: any = ["Apr", 14.5, 1.2]
  e: any = ["May", 18.2, 1]

  title = 'Currency Relation';
  type: any = 'LineChart';
  data: any = [
    this.a,
    this.b,
    this.c,
    this.d,
    this.e
  ];

  columnNames = ["Month", "USD", "EUR"];

  width = 550;
  height = 400;

  rates: any;

  constructor(private store: Store) {
  }

  ngOnInit(): void {


    this.store.select(ratesSelector).subscribe(val => {
        this.rates = val
      }
    )
  }

  ngAfterViewInit() {
    this.loadChartData()
  }

  ngOnChanges(_: SimpleChanges) {
      this.store.dispatch(loadRates({
        currencyFrom: this.currencyFrom,
        currencyTo: this.currencyTo
      }));
      this.loadChartData()

  }

  loadChartData() {
    if(this.rates){
    this.rates[0].subscribe((val: any) => {
      this.a = Object.values(val.rates)
      this.a.unshift("Jan")
      this.data[0] = this.a
    })
    this.rates[1].subscribe((val: any) => {
      this.b = Object.values(val.rates)
      this.b.unshift("Feb")
      this.data[1] = this.b
    })
    this.rates[2].subscribe((val: any) => {
      this.c = Object.values(val.rates)
      this.c.unshift("Mar")
      this.data[2] = this.c
    })
    this.rates[3].subscribe((val: any) => {
      this.d = Object.values(val.rates)
      this.d.unshift("Apr")
      this.data[3] = this.d
    })
    this.rates[4].subscribe((val: any) => {
      this.e = Object.values(val.rates)
      this.e.unshift("May")
      this.data[4] = this.e
    })
      this.columnNames[1] = this.currencyFrom
      this.columnNames[2] = this.currencyTo
      this.redrawChart()
    }
  }

  redrawChart() {
    this.data = [
      this.a,
      this.b,
      this.c,
      this.d,
      this.e
    ];
  }
}
