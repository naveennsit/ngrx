import * as C from './store/counter.reducer';
import * as homelist from './home-list/store/home-list.reducer';
import * as booklist from './home-list/ngrx/bank.reducer';

import {ActionReducerMap} from '@ngrx/store';
import {BookListReducer} from './home-list/ngrx/bank.reducer';

export interface AppState {
  counterValue: C.State;
  homeList: homelist.HomeListInterface;
  bookListReducer: booklist.State
}

export const reducers: ActionReducerMap<AppState> = {
  counterValue: C.counterReducer,
  homeList: homelist.homeListReducer,
  bookListReducer: BookListReducer
};
