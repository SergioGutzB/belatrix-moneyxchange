import { Component, OnInit } from '@angular/core';
import { IXchange } from 'src/app/models/xchange';
import { XchangeService } from 'src/app/services/xchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  public money: string;
  public change: string;
  public xchange: IXchange;
  constructor(private xchangeService: XchangeService) { }

  ngOnInit() {
    this.getXchange();
  }


  getXchange() {
    this.xchangeService.getXchange('EUR', 'USD').subscribe((response: IXchange) => {
      this.xchange = response;
    });
  }

  convert() {
    if (!this.xchange) { return; }
    this.change = (this.xchange.rates.EUR * parseFloat(this.money.replace(/\,/g, ''))).toString();
  }

}
