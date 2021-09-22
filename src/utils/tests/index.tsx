// see in the docs: https://testing-library.com/docs/react-testing-library/setup
import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

export const history = createMemoryHistory();

const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
