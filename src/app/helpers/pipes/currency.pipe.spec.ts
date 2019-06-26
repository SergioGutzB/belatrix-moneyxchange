import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should only return empty when input param is only letters', () => {
    const pipe = new CurrencyPipe();
    const result = pipe.transform('asdsd')
    expect(result).toEqual('');
  });

  it('should only return numbers with currency format when input param have number and letters and dots', () => {
    const pipe = new CurrencyPipe();
    const result = pipe.transform('34asA56.67');
    expect(result).toEqual('3,456.67');
  });

  it('should return a number with currency format with thousands separators, and a maximun 4 decimals', () => {
    const pipe = new CurrencyPipe();
    const result = pipe.transform('4354342.123456');
    expect(result).toEqual('4,354,342.1235');
  });
});
