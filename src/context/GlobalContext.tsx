import * as React from "react";
import { searchTypes } from "../utils/constants";
import { actionTypes } from "./actionTypes";

export interface Action {
  readonly type: string;
  readonly payload?: any;
}
type Dispatch = (action: Action) => void;
type State = { queryType: string; searchKeyword: string };
type GlobalCtxProviderProps = { children: React.ReactNode };

const GlobalContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.SET_QUERY_TYPE: {
      return { ...state, queryType: action.payload.queryType };
    }
    case actionTypes.SET_QUERY: {
      return { ...state, searchKeyword: action.payload.searchKeyword };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GlobalCtxProvider({ children }: GlobalCtxProviderProps) {
  const [state, dispatch] = React.useReducer(globalReducer, {
    queryType: searchTypes.REPOSITORY,
    searchKeyword: "",
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalCtxProvider");
  }
  return context;
}

export { GlobalCtxProvider, useGlobalContext };
