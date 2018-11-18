// @flow
import React from 'react';
import styles from './Input.module.css';

type Props = {
  onChange: Function,
  placeholder?: string,
  value?: string
};

const Input = ({ onChange, placeholder, value }: Props) => (
  <input
    className={styles.element}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    value={value}
  />
);

Input.defaultProps = {
  placeholder: '',
  value: ''
};

export default Input;
