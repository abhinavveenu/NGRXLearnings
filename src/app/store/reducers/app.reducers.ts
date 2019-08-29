import { routerReducer } from '@ngrx/router-store';
import { usersReducers } from './user.reducers';
import { configReducers } from './config.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: usersReducers,
    config: configReducers
};
