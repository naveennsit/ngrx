import {Action} from '@ngrx/store';
import {Bank} from './bank.reducer';


export const FETCH_BANKLIST = 'FETCH_BANKLIST';
export const ADD_BANKLIST = 'Add_BANKLIST';

export class FetchBankList implements Action {
  readonly type = FETCH_BANKLIST;
}

export class AddBankList implements Action {
  readonly type = ADD_BANKLIST;

  constructor(public payload: Bank[]) {
  }
}


export type BankAction = FetchBankList | AddBankList;
