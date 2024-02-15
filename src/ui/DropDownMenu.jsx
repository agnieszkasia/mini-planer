import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledList = styled.ul`
  z-index: 100;
  list-style: none;
  margin: -1px;
  padding: 0;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.05);
  transition: all linear 0.3s;
  position: absolute;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  border-left: 1px solid var(--color-grey-200);
  width: 100%;
`;

const StyledToggle = styled.div`
  position: relative;
  background: none;
  transition: all 0.2s;
  border-left: ${(props) =>
    props.$active
      ? "1px solid var(--color-grey-200)"
      : "0 solid var(--color-grey-200)"};
  background-color: ${(props) =>
    props.$active ? "var(--color-grey-0)" : "none"};
  cursor: default;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "none" : "var(--color-grey-100)"};
    border-left: 1px solid var(--color-grey-200);
  }
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem 1.2rem 1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-variant: small-caps;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;
const DropDownMenuContext = createContext();

function DropDownMenu({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  const open = () => setMenuOpen(true);

  return (
    <DropDownMenuContext.Provider value={{ menuOpen, close, open }}>
      {children}
    </DropDownMenuContext.Provider>
  );
}

function Toggle({ children }) {
  const { menuOpen, close, open } = useContext(DropDownMenuContext);

  return (
    <StyledToggle
      $active={menuOpen ? true : false}
      onMouseOver={() => open()}
      onMouseOut={() => close()}
    >
      {children}
    </StyledToggle>
  );
}

function List({ children }) {
  const { menuOpen, close } = useContext(DropDownMenuContext);
  const ref = useOutsideClick(close, false);

  if (!menuOpen) return null;

  return <StyledList ref={ref}>{children}</StyledList>;
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(DropDownMenuContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

DropDownMenu.Menu = DropDownMenu;
DropDownMenu.Toggle = Toggle;
DropDownMenu.List = List;
DropDownMenu.Button = Button;

export default DropDownMenu;
