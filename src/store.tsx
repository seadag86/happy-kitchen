import React, { useReducer, createContext, useEffect, FC } from "react";
import { initialState, reducer, IAction } from "./reducer";

// Create global context
export const StoreContext = createContext<{
  state: typeof initialState;
  dispatch: (action: IAction) => void;
}>({
  state: initialState,
  dispatch: () => { }
});

// Setup context provider
export const StoreProvider: FC = ({ children }) => {

  // Get state and dispatch from reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Log new state
  useEffect(() => {
    console.log('newState', state);
  }, [state]);

  // Render state and dispatch
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
