import React from 'react';
import styles from './landing-page.module.css';
import { ReactComponent as RocketImage } from '../../assets/images/rocket.svg';
import Button from '../../shared/components/button/button';
import { useAppDispatch } from '../../shared/state/app-state-context-provider';
import { AppStateActionType } from '../../shared/state/app-state';

const LandingPage = () => {
  const dispatch = useAppDispatch();

  const openReports = () => {
    dispatch({ type: AppStateActionType.showCreateReportModal });
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Page Title</h2>
      <div className={styles.contentContainer}>
        <RocketImage className={styles.mainImage}/>
        <div className={styles.centralTextContainer}>
          <h2>Start creating reports</h2>
          <p>You don't have any defined reports yet</p>
        </div>
        <Button text="Create report" action={openReports}/>
      </div>
    </div>
  );
};

export default LandingPage;
