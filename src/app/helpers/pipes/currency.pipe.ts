import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newValue = value.replace(/([^\d, \.])+/g, '');
    if (newValue && newValue.charAt(newValue.length - 1) !== '.') {
      if (!isNaN(parseFloat(newValue))) {
        const formatValue = parseFloat(newValue.replace(/,/g, ''))
          .toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 4, minimumFractionDigits: 0 });
        return formatValue;
      }
    }
    return newValue;
  }

}
