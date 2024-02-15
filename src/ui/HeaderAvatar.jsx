import styled from "styled-components";

import Avatar from "./Avatar";
import { useUser } from "../features/authentication/useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  padding: 0.6rem 4rem 0.6rem 1rem;
  gap: 1rem;
  align-items: center;
  font-weight: 700;
  font-size: 0.8rem;
`;

function HeaderAvatar() {
  const { user } = useUser();
  const { fullName } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <span>{fullName}</span>
      <div style={{ width: "1.8rem" }}>
        <Avatar />
      </div>
    </StyledUserAvatar>
  );
}

export default HeaderAvatar;
