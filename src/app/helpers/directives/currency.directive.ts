import { Directive, ElementRef, HostListener } from '@angular/core';
import { CurrencyPipe } from '../pipes/currency.pipe';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {

  private el: HTMLInputElement;

  constructor(
    public elementRef: ElementRef,
    private currency: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.currency.transform(value);
  }

}
