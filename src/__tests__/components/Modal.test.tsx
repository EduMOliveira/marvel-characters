import { screen, render, fireEvent } from "../../utils/tests";
import { Modal } from "../../components/Modal";

const props = {
  show: true,
  onClose: jest.fn(),
  children: <div>test child</div>,
  title: "Modal Title",
};

describe("<Modal />", () => {
  it("should be able to render the Modal component correctly", () => {
    render(<Modal {...props} />);

    const modal = screen.getByTestId("modal");
    const title = screen.getByText(/modal title/i);
    const child = screen.getByText(/test child/i);
    const btn = screen.getByText(/salvar/i);

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveStyle(`display: flex`);
    expect(title).toBeInTheDocument();
    expect(child).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it("should call method onClose if button pressed", () => {
    render(<Modal {...props} />);

    const modal = screen.getByTestId("modal");
    const btn = screen.getByText(/salvar/i);

    expect(modal).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it("should be hidden if the props show is false", () => {
    render(<Modal {...props} show={false} />);

    const modal = screen.getByTestId("modal");

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveStyle(`display: none`);
  });
});
