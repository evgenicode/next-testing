import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have Docs text", () => {
  render(<Home />);

  const myElem = screen.getByText("Docs");

  expect(myElem).toBeInTheDocument(); //if error rollback "@testing-library/jest-dom": "^5.16.5",
});
