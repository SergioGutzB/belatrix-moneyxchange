import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCurrencyComponent),
      multi: true
    }
  ]
})
export class InputCurrencyComponent implements OnInit, ControlValueAccessor {

  @Input()
  callback: (args?: any) => void;
  value: string;
  isDisabled: boolean;
  onChange = (_: any) => {
  }
  onTouch = () => { };

  constructor() { }

  ngOnInit() {
  }

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
    if (this.callback) {
      this.callback();
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
