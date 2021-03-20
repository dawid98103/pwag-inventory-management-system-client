import { StateContext } from './state';
import { ILoginResponseDto } from '../api/dto';
import InventoryAPI from '../api/api';

export enum ActionType {
    SIGN_IN = 'Log in',
    SIGN_OUT = 'Log out',
}

export type Action = { type: ActionType.SIGN_IN, payload: ILoginResponseDto } | { type: ActionType.SIGN_OUT };

export const reducer = (state: StateContext, action: Action) => {
    switch (action.type) {
        case ActionType.SIGN_IN:
            InventoryAPI.defaults.headers.common['Authorization'] = action.payload.token;
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            return { ...state, isAuthenticated: true, currentUser: action.payload };
        case ActionType.SIGN_OUT:
            localStorage.removeItem('token');
            return { ...state, isAuthenticated: false, currentUser: null };
        default:
            throw new Error('Not among actions');
    }
};