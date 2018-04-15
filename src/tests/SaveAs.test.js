import React from "react";
import FileSaver from "file-saver";
jest.mock("file-saver", () => ({ saveAs: jest.fn() }));
import { SaveAs } from "../components/SaveAs/SaveAs";

describe("SaveAs", () => {
  it("should do nothing while we don't have any data to download", () => {
    const wrapper = shallow(<SaveAs />);
    expect(wrapper.props().disabled).toEqual(true);
  });

  it("should able to download", () => {
    const wrapper = shallow(<SaveAs />);
    wrapper.find(".Button-test").simulate("click", { preventDefault() {} });
    createDownload("content", "example", "json");
    expect(FileSaver.saveAs).toHaveBeenCalledWith(
      { content: ["content"], options: { type: "application/json" } },
      "example.json"
    );
  });
});

const createDownloadFromBlob = (blob, filename, extension) => {
  FileSaver.saveAs(blob, `${filename}.${extension}`);
};

const createDownload = (content, filename, extension) => {
  createDownloadFromBlob(
    new Blob([content], { type: "application/json" }),
    filename,
    extension
  );
};

