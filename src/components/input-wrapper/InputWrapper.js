// @flow
import * as React from 'react';
import styles from './InputWrapper.module.css';

type Props = {
  title: string,
  children: React.Node
};

const InputWrapper = ({ children, title }: Props) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    {children}
  </div>
);

export default InputWrapper;
