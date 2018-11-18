// @flow
import React from 'react';
import RadioButton from './RadioButton';
import styles from './RadioButtonGroup.module.css';

type Values = {
  [string]: string
};

type Props = {
  onChange: Function,
  value: string,
  values: Values
};

const RadioButtonGroup = ({ onChange, value, values }: Props) => (
  <div className={styles.group}>
    {Object.keys(values).map(name => (
      <RadioButton
        checked={value === name}
        key={name}
        onChange={onChange}
        value={name}
        label={values[name]}
      />
    ))}
  </div>
);

export default RadioButtonGroup;
