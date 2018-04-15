import React, { Component } from "react";
import { Form } from "../Form/Form";
import { SaveAs } from "../SaveAs/SaveAs";
import { NoResults } from "../NoResults/NoResults";
import ReactJson from "react-json-view";
import "./Main.scss";

export class Main extends Component {
  state = { jsonFile: [] };

  _updateState = data => {
    this.setState({ jsonFile: data });
  };

  _renderJson() {
    return this.state.jsonFile.length === 0 ? (
      <NoResults />
    ) : (
      <ReactJson src={this.state.jsonFile} name={false} theme={"monokai"} />
    );
  }

  render() {
    return (
      <main className="Main">
        <div className="Main-content">
          <div className="Main-contentForm">
            <Form getJsonFile={this._updateState} />
          </div>
          <div className="Main-contentPlace">{this._renderJson()}</div>
        </div>
        <div className="Main-saveButton">
          <SaveAs data={this.state.jsonFile} />
        </div>
      </main>
    );
  }
}
