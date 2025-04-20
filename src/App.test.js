import { render, act } from "@testing-library/react";
import App from "./App";

// Mock the lazy-loaded Home component
jest.mock("./pages/Home/Home.jsx", () => () => <div>Mocked Home</div>);

test("renders App component", async () => {
  await act(async () => {
    render(<App />);
  });
});
