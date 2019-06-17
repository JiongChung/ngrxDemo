import {Action} from '@ngrx/store';
export enum ActionTypes  {
    Increment = '[Counter Component] Increment',
    Decrement = '[Counter Component] Decrement',
    urlList = 'urlList',
    insuranceItems = 'insuranceItems'
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}


export const ngUrlList = (list: any) => { return { type: ActionTypes.urlList, list }}
export const ngInsuranceItems = (list: any) => { return { type: ActionTypes.insuranceItems, list }}