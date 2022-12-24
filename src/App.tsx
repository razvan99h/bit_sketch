import React from 'react';
import RouterComponent from './navigation/router';
import styles from './App.module.css';
import AppStateContextProvider from './shared/state/app-state-context-provider';

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <AppStateContextProvider>
        <RouterComponent/>
      </AppStateContextProvider>
    </div>
  );
};

export default App;
