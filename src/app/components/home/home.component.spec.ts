import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ExchangeComponent } from '../exchange/exchange.component';
import { CurrencyPipe } from 'src/app/helpers/pipes/currency.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { XchangeService } from 'src/app/services/xchange.service';
import { InputCurrencyComponent } from '../input-currency/input-currency.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ExchangeComponent,
        InputCurrencyComponent,
        CurrencyPipe
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        CurrencyPipe,
        XchangeService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
