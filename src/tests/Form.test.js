import React from "react";
import { Form } from "../components/Form/Form";

describe("Form onChange...", () => {
  it("must update its response state when info file status is done", () => {
    const getJsonFile = jest.fn();
    const wrapper = shallow(<Form getJsonFile={getJsonFile} />);
    const info = {
      file: {
        status: "done",
        response: [{ name: "Toni" }]
      }
    };
    wrapper.simulate("change", info);
    expect(wrapper.state("response")).toEqual(info.file.response);
  });

  it("must not allow to upload another file if file status is done", () => {
    const getJsonFile = jest.fn();
    const wrapper = shallow(<Form getJsonFile={getJsonFile} />);
    const info = {
      file: {
        status: "done",
        response: [{ name: "Toni" }]
      }
    };
    wrapper.simulate("change", info);
    expect(wrapper.state("disabled")).toEqual(true);
  });

  it("must update its state when info file status is removed", () => {
    const getJsonFile = jest.fn();
    const wrapper = shallow(<Form getJsonFile={getJsonFile} />);
    const info = {
      file: {
        status: "removed",
        response: []
      }
    };
    wrapper.simulate("change", info);
    expect(wrapper.state("response")).toEqual(info.file.response);
  });

  it("must call a message error when", () => {
    const getJsonFile = jest.fn();
    const wrapper = shallow(<Form getJsonFile={getJsonFile} />);
    const info = {
      file: {
        status: "error",
        response: undefined
      }
    };
    wrapper.simulate("change", info);
    expect(wrapper.state("onError")).toEqual(true);
  });
});
