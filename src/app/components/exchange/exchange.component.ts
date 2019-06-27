import { Component, OnInit } from '@angular/core';
import { IXchange } from 'src/app/models/xchange';
import { XchangeService } from 'src/app/services/xchange.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  public xchange: IXchange;
  public xchangeForm: FormGroup;
  constructor(private xchangeService: XchangeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.getXchange();
  }


  getXchange() {
    this.xchangeService.getXchange('EUR', 'USD').subscribe((response: IXchange) => {
      this.xchange = response;
    });
  }

  convert() {

    if (!this.xchange) { return; }
    const money = parseFloat(this.xchangeForm.controls.money.value.replace(/\,/g, ''));
    this.xchangeForm.controls.change.setValue((this.xchange.rates.EUR * money).toString());
  }

  private initForm() {
    this.xchangeForm = this.fb.group({
      money: ['', Validators.required],
      change: [{ value: '', disabled: true }]
    });
  }

}
