import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Increment, Decrement} from '../ngrx/actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    count: number;
    ngrxStore: any = {};

    constructor(private store: Store<{ngrxStore: number}>) {
        this.ngrxStore = store.source['value'].ngrxStore;
        
    }

    ngOnInit() {
        this.count = this.ngrxStore.count;
    }

    increment() {
        this.count++;
        this.store.dispatch(new Increment());
    }

    decrement() {
        this.count--;
        this.store.dispatch(new Decrement());
    }

    getNgrx(){
        console.log(this.ngrxStore)
    }
}
