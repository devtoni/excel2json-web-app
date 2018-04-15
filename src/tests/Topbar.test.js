import React from "react";
import { Topbar } from "../components/Topbar/Topbar";

describe('Topbar', () => {
  it("renders a custom topbar title", () => {
    const title = 'my title'
    const wrapper = shallow(<Topbar title={title} />);
    const text = wrapper.find('div.Topbar-title').text()
    expect(text).toEqual(title)
  });

  it("renders a default topbar title", () => {
    const title = 'topbar title'
    const wrapper = shallow(<Topbar />);
    const text = wrapper.find('div.Topbar-title').text()
    expect(text).toEqual(title)
  });
})
