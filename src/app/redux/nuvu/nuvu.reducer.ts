import { Action, State, createReducer, on } from '@ngrx/store'
import { responseData } from './nuvu.action';
import { ProfileModel } from 'src/app/core/models/nuvu.model';

export interface NuvuState {
    profile: ProfileModel[]
}

export const initialState = { 
    profile: []
};

const featureReducer = createReducer(
    initialState,
    on(responseData, (state, { payload }) => {
        // var newData = payload["civilizations"].map((item) => 
        //     Object.assign({}, item, { selected: false })
        // )
        //debugger
        return {
            ...state,
            profile: payload['profile']
        }
    })
);
  
export function reducer( state: any, action: Action): any {
    return featureReducer(state, action);
}