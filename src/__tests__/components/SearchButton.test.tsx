import userEvent from "@testing-library/user-event";
import { screen, render } from "../../utils/tests";
import { SearchButton } from "../../components/SearchButton";

describe("<SearchButton />", () => {
  it("should be able to render button component and call handler when press", () => {
    const fakeButtonHandler = jest.fn(() => {});

    render(<SearchButton onClick={fakeButtonHandler}>Buscar</SearchButton>);

    const btn = screen.getByText(/buscar/i);

    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(fakeButtonHandler).toHaveBeenCalledTimes(1);
  });
});
