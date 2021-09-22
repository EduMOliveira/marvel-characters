import { screen, render, history } from "../../utils/tests";
import App from "../../App";

describe("<App />", () => {
  it("should render the App component", () => {
    render(<App />);

    const btn = screen.getByText(/buscar/i);

    expect(btn).toBeInTheDocument();
    expect(history).toHaveLength(1);
    expect(history.location.pathname).toBe("/");
  });
});
