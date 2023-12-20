import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectImage from "../index";

const mockProps = {
  value: {
    alt: "Test Image",
    asset: {
      _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
      _type: "image",
    },
  },
};

jest.mock("@sanity/client", () => ({
  createClient: jest.fn(),
}));

describe("ProjectImage", () => {
  test("renders ProjectImage component", () => {
    render(<ProjectImage {...mockProps} />);
    const imgElement = screen.getByAltText(mockProps.value.alt);
    expect(imgElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ProjectImage {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
