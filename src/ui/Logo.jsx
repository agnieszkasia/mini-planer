import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.button`
  padding: 0.4rem 2rem;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  height: 2.6rem;
  width: auto;
`;

function Logo() {
  const navigate = useNavigate();

  return (
    <StyledLogo onClick={() => navigate("/")}>
      <Img src="/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
