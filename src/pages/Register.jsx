import styled from "styled-components";
import RegisterForm from "../features/authentication/RegisterForm";

const RegisterLayout = styled.main`
  min-height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
`;

const Header = styled.header`
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
`;

function Register() {
  return (
    <RegisterLayout>
      <Header>Rejestracja</Header>
      <RegisterForm />
    </RegisterLayout>
  );
}

export default Register;
