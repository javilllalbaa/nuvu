import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { resquestData, responseData } from './nuvu.action';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { NuvuService } from 'src/app/core/services/nuvu.services';

@Injectable()
export class NuvuEffects {

    constructor(
        private actions$: Actions,
        private nuvuService: NuvuService
    ) {}
 
    NuvusEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(resquestData),
            switchMap(() => this.nuvuService.getProfileJSON()
            .pipe(
                mergeMap((payload) => [
                    responseData({ payload })
                  ])
            ))
        )   
    });
}

