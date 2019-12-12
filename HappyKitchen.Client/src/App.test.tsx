import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

it("renders app", () => {
  render(<App />);
  const overlay = document.querySelector(".overlay");
  expect(!!overlay).toBe(true);
});
