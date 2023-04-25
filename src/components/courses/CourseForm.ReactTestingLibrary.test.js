import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";

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
  return render(<CourseForm {...props}></CourseForm>);
}

// tests
it("should render Add Course header", () => {
    const {getByText} = renderCorseForm();
    getByText("Add Course");
});

it("should label save button as 'Save' when not saving", () => {
    const {getByText} = renderCorseForm();
    getByText("Save");
});

it("should label save button as 'Saving...' when saving", () => {
    const {getByText} = renderCorseForm({saving: true});
    getByText("Saving...");
});