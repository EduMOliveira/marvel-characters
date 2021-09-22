import { fireEvent, render, screen } from "../../utils/tests";
import { TextArea } from "../TextArea";

describe("<TextArea />", () => {
  it("should be able to render textarea element", () => {
    render(<TextArea />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });

  it("should be able to insert some text in the textarea element", () => {
    const onChangeHandler = jest.fn();

    render(<TextArea value="Test Value" onChange={onChangeHandler} />);

    const txtArea = screen.getByDisplayValue(/test value/i);

    expect(txtArea).toBeInTheDocument();
    fireEvent.change(txtArea, { target: { value: "new value" } });
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });
});
