import {Action} from '@ngrx/store';
import {ActionTypes} from './actions';
  
export const initialState = {
    urlList: [],
    insuranceItems: [],
    count: 0
};

export function ngrxStore(state = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.Increment:
            state['count'] = state['count'] + 1;
            return state;
        case ActionTypes.Decrement:
                state['count'] = state['count'] - 1;
            return state;
        case ActionTypes.urlList:
            state['urlList'] = action['list'];
            return state;
        case ActionTypes.insuranceItems:
                state['insuranceItems'] = action['list'];
            return state;
        default:
            return state;
    }
}