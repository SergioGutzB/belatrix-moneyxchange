import { CurrencyDirective } from './currency.directive';

xdescribe('CurrencyDirective', () => {
  it('should create an instance', () => {
    const directive = new CurrencyDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
