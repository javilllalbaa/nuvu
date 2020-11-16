import * as civilizationReducer from './civilizations/civilization.reducer';
import { ActionReducerMap} from '@ngrx/store';

export interface State {
    civilizations: civilizationReducer.CivilizationsState;
}

export const reducers: ActionReducerMap<State> = {
    civilizations: civilizationReducer.reducer
};