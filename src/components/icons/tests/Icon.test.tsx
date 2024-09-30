// Icon.test.tsx
import { render, screen } from "@testing-library/react";
import React from "react";
import { Icon } from "../Icon"; // Adjusted import path for the component

describe("Icon Component", () => {
  it("renders correctly with required props", () => {
    render(<Icon qaId="icon" name="LOGIN" />); // Replace "someIcon" with a valid key from IconEnum

    // Check if the icon is in the document
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();

    // Check if the SVG has the correct attributes
    expect(iconElement).toHaveAttribute("viewBox", "0 -960 960 960");
    expect(iconElement).toHaveAttribute("role", "img");
    expect(iconElement).toHaveAttribute("aria-label", "LOGIN");

    // Check if the path element is rendered with correct fill
    const pathElement = iconElement.querySelector("path");
    expect(pathElement).toHaveAttribute("fill", "currentColor");
  });

  it("renders correctly with custom size prop", () => {
    render(<Icon qaId="icon" name="LOGIN" size="large" />); // Replace "someIcon" with a valid key

    // Check if the custom class is applied based on size
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toHaveClass("large"); // Assuming "large" is a valid size key in styles
  });

  it("renders correctly with aria-hidden attribute", () => {
    render(<Icon qaId="icon" name="LOGIN" aria-hidden={true} />); // Replace "someIcon" with a valid key

    // Check if aria-label is not set when aria-hidden is true
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).not.toHaveAttribute("aria-label");
  });
});
