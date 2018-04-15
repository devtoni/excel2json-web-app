import React, { Component } from "react";
import PropTypes from "prop-types";
import { Upload, Icon, message } from "antd";

const { Dragger } = Upload;
const ACTION_URL = "https://excel2json-api.herokuapp.com/upload";

export class Form extends Component {
  state = { disabled: false, response: [], onError: false };

  _onChange = info => {
    const { status, response, name } = info.file;
    switch (status) {
      case "done":
        message.success(`${name} file uploaded successfully.`);
        this.setState({ disabled: true, response });
        this.props.getJsonFile(this.state.response);
        break;
      case "error":
        message.error(`${name} file upload failed.`);
        this.setState({ onError: true });
        break;
      case "removed":
        this.setState({ disabled: false, response: [] });
        this.props.getJsonFile(this.state.response);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Dragger
        name="file"
        multiple={false}
        action={ACTION_URL}
        onChange={this._onChange}
        disabled={this.state.disabled}
      >
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    );
  }
}

Form.propTypes = {
  getJsonFile: PropTypes.func
};
