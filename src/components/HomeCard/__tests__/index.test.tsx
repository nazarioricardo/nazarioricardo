import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeCard from "../index"; // adjust this import according to your file structure

describe("HomeCard", () => {
  test("renders HomeCard component", () => {
    render(<HomeCard />);
    expect(screen.getByText("Ricardo Nazario")).toBeInTheDocument();
    expect(screen.getByText("nazarioricardo@gmail.com")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Hello. I'm a software developer who loves creating joyful products/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /I've worked as a full stack and mobile developer for the past 6/
      )
    ).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<HomeCard />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Add more tests as needed
});
