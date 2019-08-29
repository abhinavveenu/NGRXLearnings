import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IConfig } from '../../models/config.interface';
import { ConfigActions, GetConfig, EConfigActions, GetConfigSuccess } from '../actions/config.actions'
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );

    constructor(
        private _configService: ConfigService,
        private _actions$: Actions) { }
}