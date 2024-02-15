import styled from "styled-components";

import UpdateProfile from "../features/settings/UpdateProfile";
import UpdateSettings from "../features/settings/UpdateSettings";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import { device } from "../styles/devices";
import LogoutButton from "../ui/LogoutButton";

const StyledLeftColumn = styled.div`
  width: 100%;
  padding: 3rem 0 0;

  @media ${device.laptopL} {
    padding: unset;
    float: left;
    width: 50%;
    height: unset;
  }
`;
const StyledRightColumn = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 2rem;

  @media ${device.laptopL} {
    padding: unset;
    border-left: 1px solid var(--color-grey-300);
    width: calc(50% - 1px);
    float: right;
  }
`;

const StyledTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;

  @media ${device.laptopL} {
    height: 100%;
    flex-direction: row;
    padding: 4rem 3rem;
  }
`;

function Settings() {
  return (
    <StyledTemplate>
      <StyledLeftColumn>
        <UpdateProfile />
        <UpdatePasswordForm />
      </StyledLeftColumn>
      <StyledRightColumn>
        <UpdateSettings />
      </StyledRightColumn>
      <LogoutButton />
    </StyledTemplate>
  );
}

export default Settings;
