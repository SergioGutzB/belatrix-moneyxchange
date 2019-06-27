import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeComponent } from './exchange.component';
import { InputCurrencyComponent } from '../input-currency/input-currency.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CurrencyPipe } from 'src/app/helpers/pipes/currency.pipe';
import { XchangeService } from 'src/app/services/xchange.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
