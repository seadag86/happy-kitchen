import React, { useContext } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Overlay from "./Overlay";
import { StoreContext, StoreProvider } from "../store";
import { initialState, reducer } from "../reducer";

afterEach(cleanup);

it("Should render overlay initally as not active", () => {
  const template = (
    <Overlay />
  )

  render(template);
  const overlay = document.querySelector(".overlay--active");

  expect(!!overlay).toBe(false);
});

it("Should render overlay as active when overlayActive state is true", () => {
  const modifiedState = { ...initialState, overlayActive: true }
  const template = (
    <StoreProvider initialState={modifiedState} reducer={reducer}>
      <Overlay />
    </StoreProvider>
  )

  render(template);
  const overlay = document.querySelector(".overlay--active");

  expect(!!overlay).toBe(true);
});

it("Should render overlay as not active after close button click", () => {
  const modifiedState = { ...initialState, overlayActive: true }
  const template = (
    <StoreProvider initialState={modifiedState} reducer={reducer}>
      <Overlay />
    </StoreProvider>
  )

  const { getByRole, debug } = render(template);
  ``
  const button = getByRole('button');
  fireEvent(button, new MouseEvent('click', { bubbles: true, cancelable: true }));

  const overlay = document.querySelector(".overlay--active");

  expect(!!overlay).toBe(false);
});

