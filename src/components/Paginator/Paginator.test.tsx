import { screen, render, fireEvent } from "../../utils/tests";
import { Paginator } from "../Paginator";

const props = {
  prev: jest.fn(),
  next: jest.fn(),
  page: 2,
  items: 1500,
  offset: 100,
  isLoading: false,
};

describe("<Paginator />", () => {
  it("should be able to render paginator component", () => {
    render(<Paginator {...props} />);

    const paginator = screen.getByTestId("paginator");
    const pageIndicator = screen.getByText(/2\/15/i);
    const buttons = screen.queryAllByRole("button");
    const svgL = screen.getByTestId("svg-paginator-left");
    const svgR = screen.getByTestId("svg-paginator-right");

    expect(paginator).toBeInTheDocument();
    expect(pageIndicator).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
    expect(svgL).toBeInTheDocument();
    expect(svgR).toBeInTheDocument();
  });

  it("should be call method when buttons has been clicked", () => {
    render(<Paginator {...props} />);

    const buttons = screen.queryAllByRole("button");

    expect(buttons).toHaveLength(2);
    fireEvent.click(buttons[1]); //first the right button
    expect(props.next).toHaveBeenCalledTimes(1);
    fireEvent.click(buttons[0]);
    expect(props.prev).toHaveBeenCalledTimes(1);
  });

  it("should be buttons disabled when isLoading", () => {
    render(<Paginator {...props} isLoading />);

    const buttons = screen.queryAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveStyle(`cursor: not-allowed` && `opacity: 0.2`);
    expect(buttons[1]).toHaveStyle(`cursor: not-allowed` && `opacity: 0.2`);
  });

  it("should be buttons disabled when have no prev or next", () => {
    render(<Paginator {...props} page={1} items={5} />);

    const buttons = screen.queryAllByRole("button");
    const pageIndicator = screen.getByText(/1\/1/i);

    expect(pageIndicator).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveStyle(`cursor: not-allowed` && `opacity: 0.2`);
    expect(buttons[1]).toHaveStyle(`cursor: not-allowed` && `opacity: 0.2`);
  });
});
