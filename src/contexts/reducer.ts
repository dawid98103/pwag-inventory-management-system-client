import { PageType, StateContext } from './state';
import { ILoginResponseDto } from '../api/dto';
import InventoryAPI from '../api/api';

export enum ActionType {
    SIGN_IN = 'Log in',
    SIGN_OUT = 'Log out',
    CHANGE_PAGE = 'Change page'
}

export type Action = { type: ActionType.SIGN_IN, payload: ILoginResponseDto } | { type: ActionType.SIGN_OUT } | { type: ActionType.CHANGE_PAGE, payload: PageType };

export const reducer = (state: StateContext, action: Action) => {
    switch (action.type) {
        case ActionType.SIGN_IN:
            InventoryAPI.defaults.headers.common['Authorization'] = action.payload.accessToken;
            localStorage.setItem('token', JSON.stringify(action.payload.accessToken));
            return { ...state, isAuthenticated: true, currentUser: action.payload };
        case ActionType.SIGN_OUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return { ...state, isAuthenticated: false, currentUser: null };
        case ActionType.CHANGE_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            throw new Error('Not among actions');
    }
};