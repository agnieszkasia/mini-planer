import styled from "styled-components";

import Button from "./Button";
import { useLogout } from "../features/authentication/useLogout";
import { device } from "../styles/devices";

const StyledButton = styled.div`
  width: 100%;

  @media ${device.tablet} {
    display: none;
  }
`;

function LogoutButton() {
  const { logout, isLoading } = useLogout();

  return (
    <StyledButton as={Button} onClick={logout}>
      WYLOGUJ
    </StyledButton>
  );
}

export default LogoutButton;
