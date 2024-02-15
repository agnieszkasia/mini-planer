import styled from "styled-components";

const StyledImage = styled.img`
  display: block;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-900);
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
`;
function DefaultAvatar({ size }) {
  return (
    <StyledImage src="avatar.png" alt="avatar" width={size} height={size} />
  );
}

DefaultAvatar.defaultProps = {
  size: "32",
};

export default DefaultAvatar;
