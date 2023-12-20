import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PortableTextObject } from "sanity";
import ProjectList from "../index";

const PLAIN_TEXT = "Plain text.";
const KEY: string = "R5FvMrjo";

const input: PortableTextObject = {
  _key: KEY,
  _type: "block",
  children: [
    {
      _key: "cZUQGmh4",
      _type: "p",
      marks: [],
      text: PLAIN_TEXT,
    },
  ],
  markDefs: [],
  style: "normal",
};

describe("ProjectList", () => {
  const mockProjects = [
    {
      _id: "1",
      image: "/path/to/image.jpg",
      title: "Project 1",
      description: "Description 1",
      slug: "project-1",
      body: [input],
      categories: ["react", "nextjs"],
    },
    {
      _id: "2",
      image: "/path/to/image.jpg",
      title: "Project 2",
      description: "Description 2",
      slug: "project-2",
      body: [input],
      categories: ["iOS", "AI"],
    },
  ];

  test("renders ProjectList component", () => {
    render(<ProjectList projects={mockProjects} />);
    mockProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      const imgElement: HTMLImageElement = screen.getByAltText(
        "Image for " + project.title
      );
      expect(imgElement).toBeInTheDocument();
      expect(imgElement.src).toMatch(
        /\/_next\/image\?url=%2Fpath%2Fto%2Fimage\.jpg/
      );
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ProjectList projects={mockProjects} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
