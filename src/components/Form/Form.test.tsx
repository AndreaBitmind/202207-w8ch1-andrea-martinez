import { render, screen } from "@testing-library/react";
import FormSteps from "./Form";

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("Then it should show a form with 'name', 'surname', 'birthdate', 'email'", () => {
      render(<FormSteps />);

      const name = screen.getByLabelText("Name");
      const surname = screen.getByLabelText("Surname");
      const birthdate = screen.getByLabelText("Birthdate");
      const email = screen.getByLabelText("Email address");
      const button = screen.getByRole("button");

      expect(name).toBeInTheDocument();
      expect(surname).toBeInTheDocument();
      expect(birthdate).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
