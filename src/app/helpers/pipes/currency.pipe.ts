import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value pipe: ', value);
    if (value && value.charAt(value.length - 1) !== '.' && !isNaN(parseFloat(value))) {
      const formatValue = parseFloat(value.replace(/,/g, ''))
        .toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 4, minimumFractionDigits: 0 });
      return formatValue;
    }
    return value;
  }

}
