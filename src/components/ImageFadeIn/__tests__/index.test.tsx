// ImageFadeIn.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageFadeIn from "../index";

describe("ImageFadeIn", () => {
  const SRC = "/path/to/image.jpg";
  test("renders ImageFadeIn component", () => {
    render(<ImageFadeIn src={SRC} alt="Test Image" priority />);
    const imgElement = screen.getByAltText("Test Image") as HTMLImageElement;
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toMatch(
      /\/_next\/image\?url=%2Fpath%2Fto%2Fimage\.jpg/
    );
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ImageFadeIn src={SRC} alt="Test Image" priority />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
