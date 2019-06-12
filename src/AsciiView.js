import React, { Component } from 'react';
import PropTypes from 'prop-types';

function base64ToArray(arg) {
  return Buffer
    .from(arg, 'base64')
    .toString()
    .replace(/[^ -~]/g, '.')
    .split('');
}

function chunkArray(arr, size) {
  const results = [];

  while (arr.length > 0) {
    results.push(arr.splice(0, size));
  }

  return results;
}

class AsciiView extends Component {
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
      <table className="AsciiView">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

AsciiView.propTypes = {
  data: PropTypes.string.isRequired,
};

export default AsciiView;
