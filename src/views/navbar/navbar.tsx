import React from 'react';
import styles from './navbar.module.css';
import { ReactComponent as DropdownArrowIcon } from '../../assets/images/navbar/dropdown-arrow-icon.svg';
import { ReactComponent as GiftIcon } from '../../assets/images/navbar/gift-icon.svg';
import { ReactComponent as QuestionMarkIcon } from '../../assets/images/navbar/question-mark-icon.svg';
import { ReactComponent as BellIcon } from '../../assets/images/navbar/bell-icon.svg';
import IconButton from '../../shared/components/icon-button/icon-button';

const Navbar = () => {
  const username = 'John Smith';

  return (
    <div className={styles.mainContainer}>
      <div className={styles.nameContainer}>
        <span className={styles.nameContainerWelcome}>Welcome,</span>
        <span>{username}</span>
        <DropdownArrowIcon className={styles.dropdownIcon}/>
      </div>

      <IconButton>
        <GiftIcon />
      </IconButton>
      <IconButton>
        <QuestionMarkIcon />
      </IconButton>
      <IconButton notifications={24}>
        <BellIcon />
      </IconButton>
    </div>
  );
};

export default Navbar;
