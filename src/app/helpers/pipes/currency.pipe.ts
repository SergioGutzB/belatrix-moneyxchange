import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeCcurrency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let newValue;
      if (!isNaN(parseFloat(value))) {
        newValue = value.toString().replace(/([^\d, \.])+/g, '');
      } else {
        newValue = value.replace(/([^\d, \.])+/g, '');
      }
      console.log(!isNaN(parseFloat(value)));
      if (newValue && newValue.charAt(value.length - 1) !== '.') {
        const formatValue = parseFloat(newValue.replace(/,/g, ''))
          .toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 4, minimumFractionDigits: 0 });
        return formatValue;
      }
      return newValue;
    }
    return value;
  }

}
