import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "../index";

describe("Item", () => {
  const mockProps = {
    src: "/test-image.jpg",
    link: "https://test-link.com",
    alt: "Test Image",
  };

  test("renders Item component", () => {
    render(<Item {...mockProps} />);
    const liElement = screen.getByRole("listitem");
    expect(liElement).toBeInTheDocument();
    const linkElement = screen.getByRole("link", { name: mockProps.alt });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockProps.link);
    const imgElement = screen.getByAltText(mockProps.alt);
    expect(imgElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Item {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
