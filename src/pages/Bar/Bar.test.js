import React from "react";
import { render } from "@testing-library/react";
import Bar from "./Bar";

test("renders list of groups", () => {
  const { getByTestId } = render(<Bar />);
  const groupListEl = getByTestId("groupList");
  expect(groupListEl).toBeInTheDocument();
});
