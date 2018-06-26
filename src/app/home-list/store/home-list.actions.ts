import {Action} from '@ngrx/store';

export const ADD_NAME = 'add_name';
export const DELETE_NAME = 'delete_name';
export const EDIT_NAME = 'edit_name';

export class AddName implements Action {
  readonly type = ADD_NAME;

  constructor(public payload: string) {
  }
}

export class DeleteName implements Action {
  readonly type = DELETE_NAME;

  constructor(public payload: number) {
  }
}

export class EditName implements Action {
  readonly type = EDIT_NAME;

  constructor(public payload: { index: number, name: string }) {
  }
}


export type ListManagement = AddName | DeleteName | EditName;
