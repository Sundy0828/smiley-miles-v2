// Footer.test.tsx
import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "../Footer"; // Adjust the import path as necessary

describe("Footer Component", () => {
  it("renders correctly with default props", () => {
    render(<Footer qaId="footer" />);

    // Check if the footer is in the document
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();

    // Check if the copyright text is rendered
    const year = new Date().getFullYear();
    expect(footerElement).toHaveTextContent(`© ${year} Mile of Smiles Timing Services. All rights reserved.`);
  });
});
