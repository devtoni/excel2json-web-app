import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import FileSaver from "file-saver";

export class SaveAs extends Component {
  state = { data: [], disabled: true };

  componentWillReceiveProps({ data }) {
    data.length !== 0
      ? this.setState({ data, disabled: false })
      : this.setState({ data, disabled: true });
  }

  _formatToJSON = data => JSON.stringify(data, 4);

  _saveJSON = e => {
    e.preventDefault();
    const nameFile = prompt("Type a name for your file", "example");
    const data = this._formatToJSON(this.state.data);
    const blob = new Blob([data], {
      type: "application/json"
    });
    FileSaver.saveAs(blob, `${nameFile}.json`);
  };

  render() {
    return (
      <Button
        className="Button-test"
        type="primary"
        icon="download"
        size="large"
        disabled={this.state.disabled}
        onClick={this._saveJSON}
      >
        Save As
      </Button>
    );
  }
}

SaveAs.propTypes = {
  data: PropTypes.array
};
