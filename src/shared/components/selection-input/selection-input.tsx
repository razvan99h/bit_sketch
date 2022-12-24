import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './selection-input.module.css';
import TextInput from '../text-input/text-input';
import { ReactComponent as DropdownArrowIcon } from '../../../assets/images/navbar/dropdown-arrow-icon.svg';

interface SelectionInputProps {
  value?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  className?: React.CSSProperties;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// TODO: only a temporary sketch based on TextInput, implement dropdown functionality
const SelectionInput: FunctionComponent<SelectionInputProps> = (props: SelectionInputProps) => {
  return (
    <div className={styles.override}>
      <TextInput {...props} readOnly className={props.className}/>
      <DropdownArrowIcon className={styles.dropdownIcon}/>
    </div>
  );
};

export default SelectionInput;
