import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Store } from '@ngrx/store';
import { ngInsuranceItems} from '../ngrx/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    insuranceItems: Array<any> = [];
    ngrxStore: any = {};
    constructor(
        public http:HttpClient,
        private store: Store<{list: any}>
    ) { 
        this.ngrxStore = store.source['value'].ngrxStore;
    }

    ngOnInit() {
        this.gets();
    }

    gets(){
        if(this.ngrxStore.insuranceItems.length == 0){
            var url = 'http://api.zhihuiyoulian.com:800/api/services/app/Butler/InitOneAppointment';
            this.http.post(url,{}).subscribe((data: any) => {
                this.insuranceItems = data.result.insuranceItems;
                this.store.dispatch(ngInsuranceItems(this.insuranceItems));
            });
        }else{
            this.insuranceItems = this.ngrxStore.insuranceItems;
        }        
    }

     getNgrx(){
        console.log(this.ngrxStore)
    }

}
