import styled from "styled-components";

const StyledButtonBottom = styled.button`
  cursor: pointer;
  top: 50%;
  position: absolute;
  background-color: var(--color-grey-900);
  opacity: 0;
  border-radius: 0 0 500px 500px;
  width: 100%;
  height: 50%;
  border: none;
  transition: all 0.4s ease-in-out;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  color: transparent;
  font-variant: small-caps;

  &:hover {
    opacity: 0.6;
    color: var(--color-grey-50);
  }
`;

const StyledButtonTop = styled.button`
  cursor: pointer;
  top: 0;
  position: absolute;
  background-color: var(--color-grey-900);
  opacity: 0;
  border-radius: 500px 500px 0 0;
  width: 100%;
  height: 50%;
  border: none;
  transition: all 0.4s ease-in-out;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  color: transparent;
  font-variant: small-caps;

  &:hover {
    opacity: 0.6;
    color: var(--color-grey-50);
  }
`;

function AvatarButtons({ onClickEdit, onClickDelete }) {
  return (
    <>
      {/* <StyledButtonTop onClick={onClickDelete}>Usuń</StyledButtonTop> */}
      <StyledButtonBottom onClick={onClickEdit}>Edytuj</StyledButtonBottom>
    </>
  );
}

export default AvatarButtons;
