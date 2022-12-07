import { fireEvent, render, screen } from "@testing-library/react";
import SignalTwo from "./SignalTwo";

describe("SignalTwo", () => {
  it("default - low", () => {
    render(<SignalTwo />);

    const value = screen.getByText("Low");

    expect(value).toBeInTheDocument();
  });

  it("test level 5 - high", () => {
    render(<SignalTwo />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelFive);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("High");

    expect(levelFive).toHaveClass("signalFive__filled");
    expect(levelFour).toHaveClass("signalFour__filled");
    expect(levelThree).toHaveClass("signalThree__filled");
    expect(levelTwo).toHaveClass("signalTwo__filled");
    expect(levelOne).toHaveClass("signalOne__filled");
  });

  it("test level 4 - high", () => {
    render(<SignalTwo />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelFour);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("High");

    expect(levelFive).not.toHaveClass("signalFive__filled");
    expect(levelFour).toHaveClass("signalFour__filled");
    expect(levelThree).toHaveClass("signalThree__filled");
    expect(levelTwo).toHaveClass("signalTwo__filled");
    expect(levelOne).toHaveClass("signalOne__filled");
  });

  it("test level 3 - Average", () => {
    render(<SignalTwo />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelThree);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("Average");

    expect(levelFive).not.toHaveClass("signalFive__filled");
    expect(levelFour).not.toHaveClass("signalFour__filled");
    expect(levelThree).toHaveClass("signalThree__filled");
    expect(levelTwo).toHaveClass("signalTwo__filled");
    expect(levelOne).toHaveClass("signalOne__filled");
  });

  it("test level 2 - Low", () => {
    render(<SignalTwo />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelTwo);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("Low");

    expect(levelFive).not.toHaveClass("signalFive__filled");
    expect(levelFour).not.toHaveClass("signalFour__filled");
    expect(levelThree).not.toHaveClass("signalThree__filled");
    expect(levelTwo).toHaveClass("signalTwo__filled");
    expect(levelOne).toHaveClass("signalOne__filled");
  });

  it("test level 1 - Low", () => {
    render(<SignalTwo />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelOne);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("Low");

    expect(levelFive).not.toHaveClass("signalFive__filled");
    expect(levelFour).not.toHaveClass("signalFour__filled");
    expect(levelThree).not.toHaveClass("signalThree__filled");
    expect(levelTwo).not.toHaveClass("signalTwo__filled");
    expect(levelOne).toHaveClass("signalOne__filled");
  });
});
