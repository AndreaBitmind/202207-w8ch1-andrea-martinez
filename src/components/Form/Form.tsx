import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormSteps = (): JSX.Element => {
  const initialState = {
    name: "",
    surname: "",
    birthdate: "",
    email: "",
  };

  const [registerData, setRegisterData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const getYears = (): number =>
    new Date().getFullYear() - +registerData.birthdate.slice(0, 4);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="What's your name?"
          value={registerData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="surname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          name="surname"
          type="text"
          placeholder="What's your surname?"
          value={registerData.surname}
          onChange={handleChange}
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="birthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control
          name="birthdate"
          type="date"
          placeholder="Enter your birthdate"
          value={registerData.birthdate}
          onChange={handleChange}
          autoComplete="off"
        />
        <Form.Text className="text-year">
          {`You are ${getYears()} years old`}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          value={registerData.email}
          onChange={handleChange}
          autoComplete="off"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormSteps;
