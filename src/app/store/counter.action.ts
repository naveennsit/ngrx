import {Action} from '@ngrx/store';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';


export class IncreamentCounter implements Action {
  readonly type = INCREMENT;
}

export class DecrementCounter implements Action {
  readonly type = DECREMENT;
}

export type CounterManagment = IncreamentCounter | DecrementCounter;
