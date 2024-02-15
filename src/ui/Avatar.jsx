import styled from "styled-components";

import { useUser } from "../features/authentication/useUser";

const StyledAvatar = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-900);
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
`;

function Avatar({ avatar, onClick }) {
  const { user } = useUser();

  let userAvatar;
  if (!avatar) {
    userAvatar = user.user_metadata.avatar;
  }

  return (
    <StyledAvatar
      onClick={onClick}
      src={avatar || userAvatar || "avatar.png"}
      alt={`Avatar`}
    ></StyledAvatar>
  );
}

export default Avatar;
