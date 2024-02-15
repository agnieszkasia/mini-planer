import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  LiaCalendar,
  LiaCalendarCheck,
  LiaCalendarWeekSolid,
  LiaClipboardListSolid,
} from "react-icons/lia";

import { device } from "../styles/devices";
import ButtonIcon from "./ButtonIcon";

const StyledMenu = styled.div`
  height: 2.4rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-50);
  gap: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 2rem;

  @media ${device.tablet} {
    display: none;
  }
`;

function MobileMenu() {
  const navigate = useNavigate();
  return (
    <StyledMenu>
      <ButtonIcon onClick={() => navigate("/day")}>
        <LiaClipboardListSolid />
      </ButtonIcon>
      <ButtonIcon onClick={() => navigate("/week")}>
        <LiaCalendarWeekSolid />
      </ButtonIcon>
      <ButtonIcon onClick={() => navigate("/month")}>
        <LiaCalendar />
      </ButtonIcon>
      <ButtonIcon onClick={() => navigate("/habit")}>
        <LiaCalendarCheck />
      </ButtonIcon>
    </StyledMenu>
  );
}

export default MobileMenu;
