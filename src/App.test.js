import { render, screen } from "@testing-library/react";

import App from "./App";

test("First Test in App Component", () => {
  render(<App />);
  const text = screen.getByText(/First React Test/i);
  expect(text).toBeInTheDocument();
});

test("Testing input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInput1 = screen.getByPlaceholderText("Enter Number");
  let checkIputPlaceHolder = screen.getByPlaceholderText("Enter Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkIputPlaceHolder).toBeInTheDocument();
  expect(checkInput1).toBeInTheDocument();
});

describe("UI part Testing", () => {
  test("UI Test 1 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "userName");
  });
  test("UI Test 2 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "userName");
  });
  test("UI Test 3 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "userName");
  });
});
describe("API part Testing", () => {
  test("API Test 1 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "userName");
  });
  test("API Test 2 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "userName");
  });
  test("API Test 3 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "userName");
  });
  describe("Inner Describe Testing", () => {
    test("UI Test 1 ", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name", "userName");
    });
    test("UI Test 2 ", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name", "userName");
    });
  });
});
//  .only  .skip 
// nested Describe