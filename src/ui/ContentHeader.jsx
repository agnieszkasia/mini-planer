import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { device } from "../styles/devices";
import Avatar from "./Avatar";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-direction: row;
`;

const HeaderButtons = styled.div`
  font-size: 2rem;
  gap: 1rem;
  display: none;
  align-items: end;
  justify-content: end;

  @media ${device.tablet} {
    display: flex;
  }
`;

const HeaderText = styled.header`
  font-size: 1.4rem;
  text-transform: uppercase;

  & span {
    font-size: 0.7rem;
  }

  @media ${device.tablet} {
    font-size: 2.6rem;

    & span {
      font-size: 1rem;
    }
  }
`;

const AvatarButton = styled.div`
  max-width: 2rem;
  padding: 0.4rem;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

function ContentHeader({ mainText, additionalText, children, navigation }) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div>
        <HeaderText>
          {mainText}
          {additionalText && (
            <>
              | <span>{additionalText}</span>
            </>
          )}
        </HeaderText>
        {navigation}
      </div>
      <HeaderButtons>{children}</HeaderButtons>
      <AvatarButton>
        <Avatar onClick={() => navigate("/settings")} />
      </AvatarButton>
    </StyledHeader>
  );
}

export default ContentHeader;
