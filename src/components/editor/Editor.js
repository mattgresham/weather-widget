// @flow
import React, { Component, Fragment } from 'react';
import Input from '../input';
import InputWrapper from '../input-wrapper';
import RadioButtonGroup from '../radio-button-group';
import temperatureUnitOptions from '../../constants/temperatureUnits';
import windOptions from '../../constants/wind';
import type { Units } from '../../types/units';

type Props = {
  isWindShown: string,
  setIsWindShown: Function,
  setTitle: Function,
  setUnits: Function,
  title: string,
  units: Units
};

class Editor extends Component<Props> {
  onTitleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.props.setTitle(e.currentTarget.value);
  };

  onUnitsChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.props.setUnits(e.currentTarget.value);
  };

  onIsWindShownChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.props.setIsWindShown(e.currentTarget.value);
  };

  render() {
    const { isWindShown, title, units } = this.props;

    return (
      <Fragment>
        <InputWrapper title="Title">
          <Input
            onChange={this.onTitleChange}
            placeholder="Title of widget"
            value={title}
          />
        </InputWrapper>
        <InputWrapper title="Temperature">
          <RadioButtonGroup
            onChange={this.onUnitsChange}
            value={units}
            values={temperatureUnitOptions}
          />
        </InputWrapper>
        <InputWrapper title="Wind">
          <RadioButtonGroup
            onChange={this.onIsWindShownChange}
            value={isWindShown}
            values={windOptions}
          />
        </InputWrapper>
      </Fragment>
    );
  }
}

export default Editor;
