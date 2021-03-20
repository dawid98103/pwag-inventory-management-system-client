import React, { useContext, useReducer } from 'react';
import { ILoginResponseDto } from '../api/dto';
import { reducer, Action } from './reducer';

export interface StateContext {
    isAuthenticated: boolean;
    currentUser: ILoginResponseDto | null;
}

export interface Store {
    state: StateContext;
    dispatch?: React.Dispatch<Action>;
}

const defaultState: StateContext = { isAuthenticated: false, currentUser: null };
const myContext = React.createContext<Store>({ state: defaultState });

export const useStateContext = () => useContext(myContext);

export const StateProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return <myContext.Provider value={{ state, dispatch }} children={children} />;
}