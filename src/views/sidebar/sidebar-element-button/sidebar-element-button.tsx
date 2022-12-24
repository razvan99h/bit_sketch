import React from 'react';
import styles from './sidebar-element-button.module.css';
import { SidebarElement } from '../sidebar.utils';

interface SidebarElementButtonProps {
  element: SidebarElement;
}

const SidebarElementButton = (props: SidebarElementButtonProps) => {
  const onElementClick = () => {
    props.element.onClick();
  }

  return (
    <button className={styles.mainContainer} onClick={onElementClick}>
      <img
        src={props.element.getImagePath()}
        alt={props.element.getName()}
        className={styles.image}
      />
      <span>
        {props.element.getName()}
      </span>
    </button>
  );
};

export default SidebarElementButton;
