import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../views/landing-page/landing-page';
import Sidebar from '../views/sidebar/sidebar';
import styles from './router.module.css';
import Navbar from '../views/navbar/navbar';
import { useAppState } from '../shared/state/app-state-context-provider';
import CreateReportModal from '../views/create-report-modal/create-report-modal';
import { ModalType } from '../shared/components/modal/modal';
import ToastMessage from '../shared/components/toast-message/toast-message';

const RouterComponent = () => {
  const appState = useAppState();

  const getRootElement = () => {
    switch (appState.displayedModal) {
      case ModalType.createReport:
        return <CreateReportModal/>;
      default:
        return <LandingPage/>;
    }
  };

  return (
    <HashRouter>
      {
        appState?.displayedModal
          ? <div className={styles.modalBackground}/>
          : null
      }
      {
        appState?.toastMessage
          ? <ToastMessage message={appState.toastMessage} type={appState.toastType}/>
          : null
      }
      <div className={styles.horizontalAlignment}>
        <Sidebar/>
        <div className={styles.verticalAlignment}>
          <Navbar/>
          <Routes>
            <Route path="/" element={getRootElement()}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );

};
export default RouterComponent;
