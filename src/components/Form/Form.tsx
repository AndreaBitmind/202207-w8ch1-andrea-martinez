import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormSteps() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="What's your name?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="surname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="What's your surname?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="birthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" placeholder="Enter your birthdate" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Acceder
      </Button>
    </Form>
  );
}

export default FormSteps;
