import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

// helper function
function renderCorseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props}></CourseForm>);
}

// tests
it('renders form and header', () => {
    const wrapper = renderCorseForm();
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual("Add Course");
});

it('labels save buttons as "Save" when not saving', () => {
    const wrapper = renderCorseForm();
    expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save buttons as "Saveing..." when not saving', () => {
    const wrapper = renderCorseForm({saving: true});
    expect(wrapper.find("button").text()).toBe("Saving...");
});
