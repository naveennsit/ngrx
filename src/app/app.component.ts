import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';


import * as fromApp from './app.store';
import {DecrementCounter, IncreamentCounter} from './store/counter.action';
import * as counter from './store/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counterState: Observable<counter.State>;

  constructor(private store: Store<fromApp.AppState>) {
  }

  incrementCounter() {
    this.store.dispatch(new IncreamentCounter());
  }

  decrementCounter() {
    this.store.dispatch(new DecrementCounter());
  }

  ngOnInit() {
    this.counterState = this.store.select('counterValue');

  }
}
