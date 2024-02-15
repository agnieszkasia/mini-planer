import styled from "styled-components";

import { device } from "../styles/devices";
import ButtonIcon from "./ButtonIcon";

const StyledBox = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 40%;
  }
`;

const Header = styled.header`
  border-bottom: 1px solid var(--color-grey-200);
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: end;
`;

const HeaderText = styled.div`
  font-size: 0.7rem;
  color: var(--color-grey-400);

  @media ${device.laptop} {
    font-size: unset;
  }
`;

function Box({ children, header, icon, onClick }) {
  return (
    <StyledBox>
      <Header>
        <HeaderText>{header}</HeaderText>
        {icon && <ButtonIcon onClick={onClick}>{icon}</ButtonIcon>}
      </Header>
      {children}
    </StyledBox>
  );
}

export default Box;
