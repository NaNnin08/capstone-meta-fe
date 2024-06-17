import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import BookingPage from "../pages/BookingPage";

test("Renders the BookingForm heading", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
