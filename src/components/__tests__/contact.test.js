import { render, screen } from "@testing-library/react";
import Contact from '../Contact';
import "@testing-library/jest-dom";

test('contact page should be rendered successfully', () => {
  render(<Contact/>);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
