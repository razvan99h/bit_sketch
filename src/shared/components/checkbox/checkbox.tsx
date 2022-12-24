import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import styles from './checkbox.module.css';

export enum CheckboxType {
  checkbox = 'checkbox',
  radio = 'radio'
}

interface CheckboxProps {
  label: string;
  pressed?: boolean;
  type?: CheckboxType;
  disabled?: boolean;
  className?: React.CSSProperties;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean | undefined>(props.pressed);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={`${styles.mainContainer} ${props.className}`}>
      <input
        type={props.type}
        disabled={props.disabled}
        checked={checked}
        onChange={props.onChange ?? onChange}
      />
      <label className={props.disabled ? styles.disabled : ''}>{props.label}</label>
    </div>
  );
};

Checkbox.defaultProps = {
  pressed: false,
  type: CheckboxType.checkbox,
  disabled: false,
  className: {},
};

export default Checkbox;
