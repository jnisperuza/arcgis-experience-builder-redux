/** @jsx jsx */
/**
  Licensing

  Copyright 2021 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/

// @ts-ignore
import { React, AllWidgetProps, jsx, IMState } from 'jimu-core';

const filterList = [
  {
    filterType: 'INSTRUMENTO',
    label: 'SUBTIPO',
    value: [
      'CRE COLOCACIONES',
      'CRE SALDOS'
    ],
  },
  {
    filterType: 'PERIODO',
    label: 'MES',
    value: [2],
  }
];

export default class Widget extends React.PureComponent<AllWidgetProps<{}> & { a: string }, {}> {
  [x: string]: any;

  /**
   * Map the state your widget needs
   * @param state
   */
  static mapExtraStateProps(state: IMState) {
    return { a: state.myState.a };
  }

  handleSetFilter = (evt) => {
    this.props.dispatch({
      type: 'SET_FILTERS',
      val: filterList /** IMPORTANT */
    });
  }

  handleClearFilter = (evt) => {
    this.props.dispatch({
      type: 'SET_FILTERS',
      val: [] // or null
    });
  }

  render() {
    return (
      <div className="widget-use-redux jimu-widget m-2">
        <button type="button" onClick={this.handleSetFilter}>Set filter</button>&nbsp;
        <button type="button" onClick={this.handleClearFilter}>Clear filter</button>
      </div>
    );
  }
}
