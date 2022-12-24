import React, { FunctionComponent } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  text: string;
  hollow?: boolean;
  action?: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={`${styles.mainContainer} ${props.hollow ? styles.hollow : ''}`} onClick={props.action}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  hollow: false,
  action: () => {
    console.log('Button clicked!');
  },
};

export default Button;
