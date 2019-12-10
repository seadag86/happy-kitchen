import React, { useReducer, createContext, useEffect, FC, Dispatch } from "react";
import { IAction, IState, initialState } from "./reducer";

export interface IStoreProvider {
  reducer: any;
  initialState: IState;
}

// Create global context
export const StoreContext = createContext<{
  state: IState;
  dispatch: (action: IAction) => void;
}>({
  state: initialState,
  dispatch: () => { }
});

// Setup context provider
export const StoreProvider: FC<IStoreProvider> = ({ reducer, initialState, children }) => {

  // Get state and dispatch from reducer
  const [state, dispatch] = useReducer(reducer, initialState) as [IState, Dispatch<IAction>];
  // Log new state
  useEffect(() => {
    console.log('newState', initialState);
  }, [initialState]);

  // Render state and dispatch
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
