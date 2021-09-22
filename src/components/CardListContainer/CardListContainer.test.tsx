import { screen, render } from "../../utils/tests";
import { CardListContainer } from "../CardListContainer";

const FakeCard = () => (
  <div>
    <h1>Fake Card</h1>
  </div>
);

describe("<CardListContainer />", () => {
  it("should be render the all cards into document", async () => {
    render(
      <CardListContainer isLoading={false} isEmpty={false} isError={false}>
        <FakeCard />
        <FakeCard />
        <FakeCard />
      </CardListContainer>
    );

    const cards = await screen.findAllByText(/fake card/i);

    expect(cards).toHaveLength(3);
  });

  it("should be render loader when isLoading", () => {
    render(
      <CardListContainer isLoading isEmpty={false} isError={false}>
        <FakeCard />
      </CardListContainer>
    );

    const cards = screen.queryAllByText(/fake card/i);
    const loader = screen.getByTestId("loader");

    expect(cards).toHaveLength(0);
    expect(loader).toBeInTheDocument();
  });

  it("should be render empty message when isEmpty", () => {
    render(<CardListContainer isLoading={false} isEmpty isError={false} />);

    const empty = screen.getByText(/sem resultado!/i);

    expect(empty).toBeInTheDocument();
  });

  it("should be render error message when isError", () => {
    render(<CardListContainer isLoading={false} isEmpty={false} isError />);

    const error = screen.getByText(/oops error!/i);

    expect(error).toBeInTheDocument();
  });
});
