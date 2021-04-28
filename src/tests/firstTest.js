import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

let rootContainer;

// eslint-disable-next-line no-undef
const document = jsdom({
  url: "http://localhost:3000"
})

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders Hello World Title", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("Hello World");
  });
});