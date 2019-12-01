import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import OverlaySearch from "./OverlaySearch";

afterEach(cleanup);

it("renders search input", () => {
  const { getByPlaceholderText, debug } = render(<OverlaySearch />);
  const input = getByPlaceholderText("Find a recipe");
  expect(input.getAttribute("placeholder")).toBe("Find a recipe");
});

it("closes overlay after ", () => {
  const { getByPlaceholderText, debug } = render(<OverlaySearch />);
  const input = getByPlaceholderText("Find a recipe");
  expect(input.getAttribute("placeholder")).toBe("Find a recipe");
});
