import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import styles from './text-input.module.css';

interface TextInputProps {
  value?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  className?: React.CSSProperties;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FunctionComponent<TextInputProps> = (props: TextInputProps) => {
  const [value, setValue] = useState<string | undefined>(props.value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${styles.mainContainer} ${props.className}`}>
      {
        props.label && (
          <div className={styles.label}>
            <span>
              {props.label}
              {props.required && <div className={styles.required}>*</div>}
            </span>
          </div>
        )
      }
      <input
        disabled={props.disabled}
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        value={value}
        onChange={props.onChange ?? onChange}
      />
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  disabled: false,
  readOnly: false,
  required: false,
  className: {},
};

export default TextInput;
