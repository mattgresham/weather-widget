// @flow
import React from 'react';
import Divider from '../divider';
import { EditorContainer } from '../editor';
import { WeatherWidgetContainer } from '../weather-widget';
import styles from './App.module.css';

type Props = {
  error: string
};

const App = (props: Props) => {
  const { error } = props;
  return (
    <div className={styles.container}>
      <Divider />
      <div className={styles.row}>
        <div className={styles.column}>
          <EditorContainer />
        </div>
        <div className={styles.column}>
          <WeatherWidgetContainer />
        </div>
      </div>
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default App;
