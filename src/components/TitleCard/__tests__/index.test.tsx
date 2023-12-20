import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TitleCard from "../index";

describe("TitleCard", () => {
  test("renders TitleCard component", () => {
    render(<TitleCard className="test-class">Test Content</TitleCard>);
    const sectionElement = screen.getByText("Test Content");
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass("test-class");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <TitleCard className="test-class">Test Content</TitleCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
