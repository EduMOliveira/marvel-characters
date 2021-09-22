import { screen, render, fireEvent } from "../../utils/tests";
import { Input } from "../../components/Input";

describe("<Input />", () => {
  it("should be able to render input component", () => {
    render(<Input />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });

  it("should be able to insert some text in the input element", () => {
    const onChangeHandler = jest.fn();

    render(<Input value="Input Value" onChange={onChangeHandler} />);

    const txtArea = screen.getByDisplayValue(/input value/i);

    expect(txtArea).toBeInTheDocument();
    fireEvent.change(txtArea, { target: { value: "some new value" } });
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });
});
