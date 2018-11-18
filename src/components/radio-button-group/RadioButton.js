// @flow
import React from 'react';
import styles from './RadioButtonGroup.module.css';

type Props = {
  checked?: boolean,
  label: string,
  onChange: Function,
  value: string
};

const RadioButton = ({ checked, label, onChange, value }: Props) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={`radio-button__${value}`}>
      <input
        checked={checked}
        className={styles.element}
        id={`radio-button__${value}`}
        value={value}
        onChange={onChange}
        type="radio"
      />
      {label}
    </label>
  </div>
);

RadioButton.defaultProps = {
  checked: false
};

export default RadioButton;
