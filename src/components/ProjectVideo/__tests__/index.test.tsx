import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectVideo from "../index";
import { act } from "react-dom/test-utils";

describe("ProjectVideo", () => {
  const mockProps = {
    value: {
      url: "https://test-video-url.com",
    },
  };

  test("renders ProjectVideo component", async () => {
    render(<ProjectVideo {...mockProps} />);

    let videoContainerElement: HTMLElement = await act(() => {
      return screen.getAllByRole("generic")[2];
    });

    expect(videoContainerElement).toBeInTheDocument();
    expect(videoContainerElement).toHaveAttribute(
      "style",
      "border-radius: 50px; overflow: hidden; width: 640px; height: 360px;"
    );

    const videoElement = videoContainerElement.firstChild;
    expect(videoElement).toHaveAttribute("src", mockProps.value.url);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ProjectVideo {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
