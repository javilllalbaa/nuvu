import { Action, State, createReducer, on } from '@ngrx/store'
import { responseData, resquestDataUpdate } from './civilization.action';
import { CivilizationModel } from 'src/app/core/models/civilizations.model';

export interface CivilizationsState {
    civilizations: CivilizationModel[]
}

export const initialState = { 
    civilizations: []
};

const featureReducer = createReducer(
    initialState,
    on(responseData, (state, { payload }) => {
        var newData = payload["civilizations"].map((item) => 
            Object.assign({}, item, { selected: false })
        )
        return {
            ...state,
            civilizations: newData
        }
    }),
    on(resquestDataUpdate, (state, { payload }) => {
        var newData = state["civilizations"].map((item) => {
            if(item.id == payload.id){
                return Object.assign({}, item, payload)
            }else{
                return Object.assign({}, item, { selected: false })
            }
               
        })
        return {
            ...state,
            civilizations: newData
        }
    })
);
  
export function reducer( state: any, action: Action): any {
    return featureReducer(state, action);
}