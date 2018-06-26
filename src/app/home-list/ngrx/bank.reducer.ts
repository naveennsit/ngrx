import * as bankActions from './bank.action';

export interface Bank {
  seo_val: string;
  text_val: string;
}

export interface BankListResponse {
  message: string;
  data: Bank[];
  status: number;
}

export interface State {
  banks: Array<Bank>;
}


export const initialState: State = {
  banks: []
};

export function BookListReducer(state = initialState, action: bankActions.BankAction) {
  switch (action.type) {
    case bankActions.ADD_BANKLIST :
      return {
        ...state,
        banks: action.payload
      };
    default :
      return state;
  }
}
