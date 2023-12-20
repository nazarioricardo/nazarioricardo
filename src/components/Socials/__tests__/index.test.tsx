import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Socials from "../index";

describe("Socials", () => {
  test("renders Socials component", () => {
    render(<Socials />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
    expect(ulElement).toHaveClass("socials");
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
    expect(screen.getByAltText("Ricardo Nazario Github")).toBeInTheDocument();
    expect(screen.getByAltText("Ricardo Nazario LinkedIn")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Socials />);
    expect(asFragment()).toMatchSnapshot();
  });
});
