import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
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

function Login() {
  return (
    <LoginLayout>
      <Header>Logowanie</Header>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
