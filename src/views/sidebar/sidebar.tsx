import React from 'react';
import styles from './sidebar.module.css';
import { ReactComponent as BitLogo } from '../../assets/images/bit-logo.svg';
import SidebarArrow from './sidebar-arrow/sidebar-arrow';
import { getSidebarElements } from './sidebar.utils';
import SidebarElementButton from './sidebar-element-button/sidebar-element-button';

const Sidebar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <BitLogo className={styles.logo}/>
        <SidebarArrow/>
      </div>

      <div className={styles.elementsContainer}>
        {
          getSidebarElements().map((element) => (
            <SidebarElementButton element={element} key={element.getName()}/>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
