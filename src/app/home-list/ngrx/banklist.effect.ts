import {Actions, Effect} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import * as BankActions from './bank.action';
import {Bank, BankListResponse} from './bank.reducer';
import {AddBankList} from './bank.action';

@Injectable()
export class BanklistEffect {
  private url = 'http://biz.timesofindia.indiatimes.com/bankifsc/getlis';

  @Effect()
  recipeFetch = this.actions$
    .ofType(BankActions.FETCH_BANKLIST).pipe(
      switchMap((actions: BankActions.BankAction) => {
        return this.http.get<BankListResponse>(this.url);
      }),
      map((res: BankListResponse) => new AddBankList(res.data))
    );

  constructor(private actions$: Actions,
              private http: HttpClient) {
  }
}
