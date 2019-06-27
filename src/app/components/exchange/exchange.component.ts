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

  private base = 'EUR';
  private symbol = 'USD';
  public xchange: IXchange;
  public xchangeForm: FormGroup;
  private lastTimestampResponse: number;

  constructor(private xchangeService: XchangeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.getXchange(this.base, this.symbol);
  }

  getXchange(base: string, symbol: string, callback?: (args?: any) => void) {
    this.xchangeService.getXchange(base, symbol).subscribe((response: IXchange) => {
      this.xchange = response;
      this.lastTimestampResponse = new Date().getTime();
      if (callback) {
        callback();
      }
    });
  }

  /**
   * Método para convertir el valor ingresado en el input.
   *
   * @returns
   * @memberof ExchangeComponent
   */
  convert() {
    if (!this.xchange) { return; }
    const money = parseFloat(this.xchangeForm.controls.money.value.replace(/\,/g, ''));
    this.xchangeForm.controls.change.setValue((this.xchange.rates.EUR * money).toString());
  }

  /**
   * método que decide si se debe hacer un request al servicio fixer nuevamente,
   * dependiendo de la respuesta del método isMore10Minutes().
   *
   * @memberof ExchangeComponent
   */
  newConversion() {
    if (this.isMore10Minutes()) {
      this.getXchange(this.base, this.symbol, this.convert.bind(this));
    } else {
      this.convert();

    }
  }

  /**
   * Método que evalua si han pasado más de 10 minutos desde el último request a servicio fixer.com.
   * Se calcula el tiempo transcurrido, se divide entre 1000 para obtener el resultado en segundos
   * y se evalua si es mayor a 600 segundos que equivalen a 10 minutos
   *
   * @private
   * @returns
   * @memberof ExchangeComponent
   */
  private isMore10Minutes(): boolean {
    const timeAgo = (new Date().getTime() - this.lastTimestampResponse) / 1000;
    return timeAgo > 600;
  }

  private initForm() {
    this.xchangeForm = this.fb.group({
      money: ['', Validators.required],
      change: [{ value: '', disabled: true }]
    });
  }
}
