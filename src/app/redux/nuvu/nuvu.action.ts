import { createAction, props} from '@ngrx/store';
import { ProfileModel } from 'src/app/core/models/nuvu.model';

export const resquestData = createAction(
    'REQUEST_DATA',
);

export const responseData = createAction(
    'RESPONSE_DATA',
    props<{ payload: ProfileModel[] }>()
);

export const resquestDataUpdate = createAction(
    'RESPONSE_DATA_UPDATE',
    props<{ payload: ProfileModel[] }>()
);
