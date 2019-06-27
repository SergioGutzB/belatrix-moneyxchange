import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputCurrencyComponent } from './components/input-currency/input-currency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from './helpers/pipes/currency.pipe';
import { CurrencyDirective } from './helpers/directives/currency.directive';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { XchangeService } from './services/xchange.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InputCurrencyComponent,
    CurrencyPipe,
    CurrencyDirective,
    ExchangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    CurrencyPipe,
    CurrencyDirective,
    XchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
