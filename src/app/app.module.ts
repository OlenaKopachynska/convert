import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertorFormComponent } from './components/convertor-form/convertor-form.component';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {converterReducer} from "./state/reducers/currency.reducer.";
import {CurrencyEffects} from "./state/effects/currency.effects";
import {environment} from "../environments/environment";
import {GoogleChartsModule} from "angular-google-charts";
import {HttpClientModule} from "@angular/common/http";
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertorFormComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({converter: converterReducer}),
    EffectsModule.forRoot([CurrencyEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
