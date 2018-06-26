import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../app.store';
import {Observable} from 'rxjs';
import {HomeListInterface} from './store/home-list.reducer';
import {AddName, DeleteName, EditName} from './store/home-list.actions';
import {AddBankList, FetchBankList} from './ngrx/bank.action';
import {HttpClient} from '@angular/common/http';
import {Bank, State} from './ngrx/bank.reducer';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  homeListState: Observable<HomeListInterface>;
  @ViewChild('userEnter') userEnter: ElementRef;
  isUpdateButtonClicked: boolean;
  editSelectedIndex: number;
  bankListState: Observable<State>;

  constructor(private store: Store<fromApp.AppState>,
              private render2: Renderer2,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.isUpdateButtonClicked = false;
    this.editSelectedIndex = -1;
    this.homeListState = this.store.select('homeList');
    this.bankListState = this.store.select('bookListReducer');
  }

  deleteItem(index: number) {
    this.store.dispatch(new DeleteName(index));
  }

  addListItem(value: string) {
    if (this.isUpdateButtonClicked) {
      this.store.dispatch(new EditName({index: this.editSelectedIndex, name: value}));
    } else {
      this.store.dispatch(new AddName(value));
    }
    this.render2.setProperty(this.userEnter.nativeElement, 'value', '');
    this.isUpdateButtonClicked = false;
    this.editSelectedIndex = -1;
  }

  editItem(index: number, name: string) {
    this.isUpdateButtonClicked = true;
    this.editSelectedIndex = index;
    this.render2.setProperty(this.userEnter.nativeElement, 'value', name);

  }

  fetchData() {
    const url = 'http://biz.timesofindia.indiatimes.com/bankifsc/getlist';
    this.store.dispatch(new  FetchBankList());

    // this.http.get(url).subscribe((response: any) => {
    //   console.log(response);
    //   this.store.dispatch(new AddBankList(response.data));
    // });
  }
}
