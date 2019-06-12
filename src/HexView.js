import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HexView.css';

function byteToHexStr(byte) {
  return byte
    .charCodeAt(0)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
}

function base64ToArray(arg) {
  return Buffer
    .from(arg, 'base64')
    .toString()
    .split('')
    .map(byteToHexStr);
}

function chunkArray(arr, size) {
  const results = [];

  while (arr.length > 0) {
    results.push(arr.splice(0, size));
  }

  return results;
}

class HexView extends Component {
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
    const hxs = base64ToArray(data);
    const chunks = chunkArray(hxs, 16);

    let i = 0;
    const rows = chunks.map((chunk) => {
      const cells = chunk.map(b => (<td key={i++}>{b}</td>));
      return <tr>{cells}</tr>;
    });

    return (
      <table className="HexView">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

HexView.propTypes = {
  data: PropTypes.string.isRequired,
};

export default HexView;
