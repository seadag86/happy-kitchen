import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import OverlaySearch from "./OverlaySearch";
import { StoreProvider } from "../store";
import { initialState, reducer } from "../reducer";

afterEach(cleanup);

it("Should render overlay initally as not active", () => {
  const template = <OverlaySearch />;

  render(template);
  const overlaySearch = document.querySelector(".overlay__search--active");

  expect(!!overlaySearch).toBe(false);
});

it("Should render overlay as active when overlayActive state is true", () => {
  const modifiedState = {
    ...initialState,
    overlayActive: true,
    searchActive: true
  };
  const template = (
    <StoreProvider initialState={modifiedState} reducer={reducer}>
      <OverlaySearch />
    </StoreProvider>
  );

  render(template);
  const overlaySearch = document.querySelector(".overlay__search--active");

  expect(!!overlaySearch).toBe(true);
});

it("Should close overlay and save terms on search submit", () => {
  const modifiedState = {
    ...initialState,
    overlayActive: true,
    searchActive: true
  };
  const template = (
    <StoreProvider initialState={modifiedState} reducer={reducer}>
      <OverlaySearch />
    </StoreProvider>
  );

  const { getByRole, debug } = render(template);
  const form = getByRole("form");

  fireEvent.submit(form, { bubbles: true, cancelable: true });
  const overlaySearch = document.querySelector(".overlay__search--active");

  expect(!!overlaySearch).toBe(false);
});
