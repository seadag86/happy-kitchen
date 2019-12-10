import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SecondaryMenu from "./SecondaryMenu";

afterEach(cleanup);

it("renders overlay input", () => {
  const { queryAllByRole } = render(<SecondaryMenu />);
  const button = queryAllByRole("button");
  expect(button.length).toBe(2);
});
