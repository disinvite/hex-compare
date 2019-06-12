import React, { Component } from 'react';
import HexView from './HexView';
import AsciiView from './AsciiView';
import './DataView.css';

class DataView extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { data: props.data };
  }

  handleChange(data) {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <HexView data={data} />
        <AsciiView data={data} />
      </div>
    );
  }
}

export default DataView;