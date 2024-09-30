// Card.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Card } from "../Card"; // Adjusted import path for the component

describe("Card Component", () => {
  it("renders correctly with required props", () => {
    render(<Card qaId="card">Card Content</Card>);

    // Check if the card is in the document
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();

    // Check if the card contains the children content
    expect(cardElement).toHaveTextContent("Card Content");
  });

  it("applies the correct default class for elevated variant", () => {
    render(<Card qaId="card">Card Content</Card>);

    // Check if the default variant 'elevated' class is applied
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toHaveClass("elevated"); // Replace with the actual CSS class for 'elevated'
  });

  it("applies the correct class for outlined variant", () => {
    render(<Card qaId="card" variant="outlined">Card Content</Card>);

    // Check if the outlined variant class is applied
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toHaveClass("outlined"); // Replace with the actual CSS class for 'outlined'
  });

  it("applies the correct elevation class", () => {
    render(<Card qaId="card" elevation={3}>Card Content</Card>);

    // Check if the elevation class for level 3 is applied
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toHaveClass("elevation3"); // Ensure this matches your CSS class
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Card qaId="card" onClick={handleClick}>Card Content</Card>);

    // Simulate a click event
    const cardElement = screen.getByTestId("card");
    fireEvent.click(cardElement);

    // Check if the click handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
