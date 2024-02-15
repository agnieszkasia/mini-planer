import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  LiaCalendarCheck,
  LiaCalendarWeekSolid,
  LiaClipboardListSolid,
} from "react-icons/lia";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

import { useLogout } from "../features/authentication/useLogout";
import { useUser } from "../features/authentication/useUser";
import { device } from "../styles/devices";
import Logo from "./Logo";
import Button from "./Button";
import HeaderAvatar from "./HeaderAvatar";
import DropDownMenu from "./DropDownMenu";

const StyledHeader = styled.header`
  display: none;
  background-color: var(--color-grey-50);

  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    display: flex;
  }
`;

function Header() {
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout();
  const { user } = useUser();

  return (
    <StyledHeader>
      {!user ? <Logo /> : <div></div>}
      {user && (
        <DropDownMenu.Menu>
          <DropDownMenu.Toggle>
            <HeaderAvatar />
            <DropDownMenu.List>
              <div style={{ borderBottom: "1px solid var(--color-grey-200)" }}>
                <DropDownMenu.Button
                  icon={<LiaClipboardListSolid />}
                  onClick={() => navigate("day")}
                >
                  List zadań
                </DropDownMenu.Button>
                <DropDownMenu.Button
                  icon={<LiaCalendarWeekSolid />}
                  onClick={() => navigate("week")}
                >
                  Kalendarz
                </DropDownMenu.Button>
                <DropDownMenu.Button
                  icon={<LiaCalendarCheck />}
                  onClick={() => navigate("habit")}
                >
                  Nawyki
                </DropDownMenu.Button>
              </div>
              <DropDownMenu.Button
                icon={<IoIosSettings />}
                onClick={() => navigate("settings")}
              >
                Ustawienia
              </DropDownMenu.Button>
              <DropDownMenu.Button icon={<IoLogOutOutline />} onClick={logout}>
                Wyloguj
              </DropDownMenu.Button>
            </DropDownMenu.List>
          </DropDownMenu.Toggle>
        </DropDownMenu.Menu>
      )}
      {!user && (
        <div style={{ display: "flex", gap: "2rem", marginRight: "4rem" }}>
          <Button
            size="small"
            onClick={() => navigate("register")}
            variation="secondary"
          >
            ZAREJESTRUJ
          </Button>
          <Button size="small" onClick={() => navigate("login")}>
            ZALOGUJ
          </Button>
        </div>
      )}
    </StyledHeader>
  );
}

export default Header;
