import React from "react";
import renderer from "react-test-renderer";
import { TodoInput } from "./components/TodoInput";

describe("TodoInput", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TodoInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
