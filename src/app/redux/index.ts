// import * as civilizationReducer from './civilizations/civilization.reducer';
import * as nuvuReducer from './nuvu/nuvu.reducer';
import { ActionReducerMap} from '@ngrx/store';

// export interface State {
//     civilizations: civilizationReducer.CivilizationsState;
// }

export interface State {
    profile: nuvuReducer.NuvuState;
}

export const reducers: ActionReducerMap<State> = {
    profile: nuvuReducer.reducer
};