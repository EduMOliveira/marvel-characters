import { screen, render } from "../../utils/tests";
import { LoaderIndicator } from "../../components/LoaderIndicator";

const props = {
  color: "#000",
  size: 50,
  weight: 1,
};

describe("<LoaderIndicator />", () => {
  it("should be able to render loader element correctly", () => {
    render(<LoaderIndicator {...props} />);

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveStyle(
      `border-top-color: ${props.color}` &&
        `border: ${props.weight}px` &&
        `width: ${props.size}px` &&
        `height: ${props.size}px`
    );
  });
});
