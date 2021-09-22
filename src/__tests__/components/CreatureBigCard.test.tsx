import { screen, render } from "../../utils/tests";
import userEvent from "@testing-library/user-event";

import { CreatureBigCard } from "../../components/CreatureBigCard";

const props = {
  data: {
    id: 9999,
    name: "The Testerino",
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
  },
  onEdit: jest.fn(),
};

describe("<CreatureBigCard />", () => {
  it("should be able to render the entire component", () => {
    render(<CreatureBigCard {...props} />);

    const spanID = screen.getByText(/#\9999/i);
    const img = screen.getByRole("img");
    const title = screen.getByText(/the testerino/i);
    const btn = screen.getByText(/editar/i);
    const desc = screen.getByText(/el tester!/i);
    const sub = screen.getByText(/séries/i);
    const series = screen.getByText(/the aventures of testerino/i);

    expect(spanID).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(sub).toBeInTheDocument();
    expect(series).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", `imgPathTest.jpg`);
    expect(img).toHaveAttribute("alt", `The Testerino card`);
  });

  it("should be able to call method when button is clicked", () => {
    render(<CreatureBigCard {...props} />);

    const btn = screen.getByText(/editar/i);

    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(props.onEdit).toHaveBeenCalledTimes(1);
  });

  it("should be render default messages when description and series is empty", () => {
    const empty = {
      description: "",
      series: {
        items: [],
      },
    };
    render(<CreatureBigCard {...props} data={{ ...props.data, ...empty }} />);

    const desc = screen.getByText(/"sem descrição"/i);
    const series = screen.getByText(/sem série/i);

    expect(desc).toBeInTheDocument();
    expect(series).toBeInTheDocument();
  });
});
