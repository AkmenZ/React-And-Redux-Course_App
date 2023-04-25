import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// shallow test
it("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header></Header>).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// mount test
it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
