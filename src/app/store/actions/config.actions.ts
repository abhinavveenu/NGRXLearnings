import { Action } from '@ngrx/store';
import { IConfig } from 'src/app/models/config.interface';

export enum EConfigActions {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get ConfigSucces'
}

export class GetConfigSuccess implements Action {
    public readonly type = EConfigActions.GetConfigSuccess;
    constructor(public payload: IConfig) { }
}

export class GetConfig implements Action {
    public readonly type = EConfigActions.GetConfig;
}

export type ConfigActions = | GetConfig | GetConfigSuccess;
