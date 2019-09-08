import React, { createContext, useContext, useReducer } from 'react';
import { IState, IAction } from './reducer';

export interface IStateProvider {
  reducer: any;
  initialState: IState;
}

export const StateContext = createContext({});

export const StateProvider: React.FC<IStateProvider> = ({
  reducer,
  initialState,
  children
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () =>
  useContext(StateContext) as [IState, React.Dispatch<IAction>];
