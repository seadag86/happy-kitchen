import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import OverlayFilter from "./OverlayFilter";
import { StoreProvider } from "../store";
import { initialState, reducer } from "../reducer";

afterEach(cleanup);

it("Should render overlay initally as not active", () => {
  const template = <OverlayFilter />;

  render(template);
  const overlay = document.querySelector(".overlay__filter--active");

  expect(!!overlay).toBe(false);
});

it("Should render overlay as active when overlayActive state is true", () => {
  const modifiedState = {
    ...initialState,
    overlayActive: true,
    filterActive: true
  };
  const template = (
    <StoreProvider initialState={modifiedState} reducer={reducer}>
      <OverlayFilter />
    </StoreProvider>
  );

  render(template);
  const overlay = document.querySelector(".overlay__filter--active");

  expect(!!overlay).toBe(true);
});
