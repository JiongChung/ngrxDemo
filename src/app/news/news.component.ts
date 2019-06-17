import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Store } from '@ngrx/store';
import { ngUrlList} from '../ngrx/actions';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    urlList: Array<any> = [];
    ngrxStore: any = {};
    constructor(
        public http:HttpClient,
        private store: Store<{list: any}>
    ) { 
        this.ngrxStore = store.source['value'].ngrxStore;
    }

    ngOnInit() {
        this.getData();
    }

    getData(){
        if(this.ngrxStore.urlList.length == 0){
            var url = 'http://api.zhihuiyoulian.com:800/api/services/app/Youxiaomi/GetOneAppointmentDetail?ServiceId=40';
            this.http.get(url).subscribe((data: any) => {
                this.urlList = data.result.urlList;
                this.store.dispatch(ngUrlList(this.urlList));
            });
        }else{
            this.urlList = this.ngrxStore.urlList;
        }
    }

    getNgrx(){
        console.log(this.ngrxStore)
    }

}
