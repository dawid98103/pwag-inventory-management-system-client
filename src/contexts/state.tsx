import React, { useContext, useReducer } from 'react';
import { ILoginResponseDto } from '../api/dto';
import { reducer, Action } from './reducer';

export enum PageType {
    MOVIES = 1,
    USERS = 2,
}
export interface StateContext {
    isAuthenticated: boolean;
    currentUser: ILoginResponseDto | null;
    currentPage: PageType
}

export interface Store {
    state: StateContext;
    dispatch?: React.Dispatch<Action>;
}

const defaultState: StateContext = { isAuthenticated: false, currentUser: null, currentPage: PageType.MOVIES };
const myContext = React.createContext<Store>({ state: defaultState });

export const useStateContext = () => useContext(myContext);

export const StateProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return <myContext.Provider value={{ state, dispatch }} children={children} />;
}