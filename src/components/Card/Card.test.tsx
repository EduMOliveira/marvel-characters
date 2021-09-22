import { render, screen, history } from "../../utils/tests";
import userEvent from "@testing-library/user-event";
import { Card } from "../Card";

const data = {
  id: 9999,
  name: "Testerino",
  description: "El tester!",
  thumbnail: {
    path: "imgPathTest",
    extension: "jpg",
  },
  series: {
    items: [
      {
        name: "The Aventures of Testerino",
      },
    ],
  },
};

describe("<Card />", () => {
  it("should be able to show the card component", () => {
    render(<Card data={data} />);

    const btn = screen.getByRole("button", { name: /ver mais/i });
    const img = screen.getByRole("img");
    const span = screen.getByText("Testerino");

    expect(btn).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      `${data.thumbnail.path}.${data.thumbnail.extension}`
    );
    expect(img).toHaveAttribute("alt", `${data.name} card`);
  });

  it("should be able navigate to creature path", () => {
    render(<Card data={data} />);

    const btn = screen.getByRole("button", { name: /ver mais/i });

    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(history).toHaveLength(2);
    expect(history.location.pathname).toBe(`/creature/${data.id}`);
  });
});
