import React, { FunctionComponent } from 'react';
import styles from './icon-button.module.css';

interface IconButtonProps {
  children: React.ReactNode; // a .svg icon
  notifications?: number;
  action?: () => void;
}

const IconButton: FunctionComponent<IconButtonProps> = (props: IconButtonProps) => {
  return (
    <button className={styles.mainContainer} onClick={props.action}>
      {props.children}
      {(props.notifications ?? 0) > 0 ? (
        <div className={styles.notificationsBubble}>{props.notifications}</div>
      ) : null}
    </button>
  );
};

IconButton.defaultProps = {
  notifications: 0,
  action: () => {
    console.log('Icon button clicked!');
  },
};

export default IconButton;
