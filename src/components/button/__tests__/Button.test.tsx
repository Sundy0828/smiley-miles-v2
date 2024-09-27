import React from "react";
import { Button } from "../Button";
import { fireEvent, render } from "@testing-library/react";

describe("Button Component", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} qaId="test-button">
        Click Me
      </Button>
    );
    const buttonElement = getByTestId("test-button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
    expect(buttonElement).toHaveClass("button primary"); // default button type
  });

  it("renders correctly with secondary type", () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} qaId="test-button" buttonType="secondary">
        Secondary Button
      </Button>
    );
    const buttonElement = getByTestId("test-button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Secondary Button");
    expect(buttonElement).toHaveClass("button secondary");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={handleClick} qaId="test-button">
        Click Me
      </Button>
    );

    const buttonElement = getByTestId("test-button");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with an icon", () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} qaId="test-button" icon={<span>🚀</span>}>
        Icon Button
      </Button>
    );
    const buttonElement = getByTestId("test-button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Icon Button");
    expect(buttonElement).toContainHTML("span"); // check for the presence of the icon
  });
});
