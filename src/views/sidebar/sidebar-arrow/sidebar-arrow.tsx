import React from 'react';
import styles from './sidebar-arrow.module.css';
import { ReactComponent as ArrowIcon } from '../../../assets/images/sidebar/sidebar-arrow-icon.svg';
import { ReactComponent as ArrowContainer } from '../../../assets/images/sidebar/sidebar-arrow-container.svg';

const SidebarArrow = () => {
  return (
    <div className={styles.mainContainer}>
      <ArrowContainer className={styles.arrowContainer}/>
      <ArrowIcon className={styles.arrow}/>
    </div>
  );
};

export default SidebarArrow;
