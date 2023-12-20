import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectItem from "../index";

describe("ProjectItem", () => {
  const mockProps = {
    image: "/path/to/image.jpg",
    link: "/project-link",
    title: "Project Title",
    description: "Project Description",
  };

  test("renders ProjectItem component", () => {
    render(<ProjectItem {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    const imgElement: HTMLImageElement = screen.getByAltText(
      `Image for ${mockProps.title}`
    );
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toMatch(
      /\/_next\/image\?url=%2Fpath%2Fto%2Fimage\.jpg/
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockProps.link);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ProjectItem {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Add more tests as needed
});
