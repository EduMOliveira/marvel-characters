import { render, screen, history } from "../../utils/tests";
import userEvent from "@testing-library/user-event";
import { BackButton } from "../BackButton";

const props = {
  to: "/",
  text: "Voltar",
};

describe("<BackButton />", () => {
  it("should be able to render the button component", () => {
    render(<BackButton {...props} />);

    const btn = screen.getByText(/voltar/i);
    const svg = screen.getByTestId("svg-back");

    expect(btn).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  it("should be able navigate to received path", async () => {
    render(<BackButton {...props} />);

    const btn = screen.getByText(/voltar/i);

    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(history).toHaveLength(2);
    expect(history.location.pathname).toBe("/");
  });
});
