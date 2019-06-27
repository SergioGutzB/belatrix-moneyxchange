import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IXchange } from '../models/xchange';

@Injectable()
export class XchangeService {

  constructor(private http: HttpClient) { }

  public getXchange(base: string, symbol: string): Observable<any> {
    const url = `${environment.api.fixer}&base=${base}&symbols=${symbol}`;
    return new Observable((observer) => {
      this.http.get<IXchange>(url)
        .pipe(
          catchError((err: Response) => {
            observer.error(err);
            return of(observer.error((err || 'Can\'t join the server.')));
          })
        )
        .subscribe((data: IXchange) => {
          observer.next(this.invertBase(data, base, symbol));
          observer.complete();
        });

    });

  }

  /**
   *
   * metodo para invertir la base en un objecto IXchange. EUR -> USD : USD -> EUR
   * el metodo se llama al responder el servicio fixer.com para convertir de USD a EUR,
   * por defecto el servicio solo permite onvertir de EUR a USD para un plan FREE.
   *
   * @private
   * @param {IXchange} xchange
   * @param {string} base
   * @param {string} symbol
   * @returns {IXchange}
   * @memberof XchangeService
   */
  private invertBase(xchange: IXchange, base: string, symbol: string): IXchange {
    const rate = 1 / xchange.rates[symbol];
    return {
      ...xchange,
      base: symbol,
      rates: { [base]: rate }
    };
  }

}
