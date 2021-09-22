import { render, screen } from "../../utils/tests";
import { PageContainer } from "../PageContainer";

describe("<PageContainer />", () => {
  it("should render the container element with children elements", () => {
    render(
      <PageContainer>
        <h1>Hello Test</h1>
        <input placeholder="Search..." />
        <button>Press</button>
      </PageContainer>
    );

    const h1Elem = screen.getByText(/hello test/i);
    const inputElem = screen.getByPlaceholderText(/search.../i);
    const btnElem = screen.getByText(/press/i);

    expect(h1Elem).toBeInTheDocument();
    expect(btnElem).toBeInTheDocument();
    expect(inputElem).toBeInTheDocument();
  });
});
