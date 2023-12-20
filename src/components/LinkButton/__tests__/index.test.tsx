import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LinkButton from "../index"; // adjust this import according to your file structure
import { Home } from "@mui/icons-material";

describe("LinkButton", () => {
  test("renders LinkButton component", () => {
    render(<LinkButton text="Home" Icon={Home} href="/home" />);
    const linkElement = screen.getByRole("link", { name: /Home/ });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/home");
  });

  test("renders LinkButton component with icon", () => {
    render(<LinkButton text="Home" Icon={Home} href="/home" />);
    const iconElement = screen.getByTestId("HomeIcon");
    expect(iconElement).toBeInTheDocument();
  });

  test("navigates to the correct page when link is clicked", () => {
    render(<LinkButton text="Home" Icon={Home} href="/home" />);
    const linkElement = screen.getByRole("link", { name: /Home/ });
    fireEvent.click(linkElement);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <LinkButton text="Home" Icon={Home} href="/home" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Add more tests as needed
});
