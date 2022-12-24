import React, { createContext, useContext, useReducer } from 'react';
import { AppState, AppStateActionDispatch, appStateReducer } from './app-state';

const AppStateContext = createContext<AppState | undefined>(undefined);

const AppStateDispatchContext = createContext<AppStateActionDispatch | undefined>(undefined);

export const useAppState = () => {
  // hook used for getting the app state using React's Context API
  const state = useContext(AppStateContext);
  if (!state) throw new Error('AppStateContext not found');
  return state;
};

export const useAppDispatch = () => {
  // hook used for getting the dispatch action, using React's Context API
  // an action is dispatched using React's useReducer hook in order to change the state
  const dispatch = useContext(AppStateDispatchContext);
  if (!dispatch) throw new Error('AppStateDispatchContext not found');
  return dispatch;
};


interface AppStateContextProviderProps {
  children: React.ReactNode;
}

const AppStateContextProvider = (props: AppStateContextProviderProps) => {
  const [appState, dispatch] = useReducer(appStateReducer, {
    displayedModal: null,
    toastMessage: null,
    toastType: null,
  });

  return (
    <AppStateDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={appState}>
        {props.children}
      </AppStateContext.Provider>
    </AppStateDispatchContext.Provider>
  );
};

export default AppStateContextProvider;
