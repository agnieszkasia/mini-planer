import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import { device } from "../styles/devices";
import MobileMenu from "./MobileMenu";

const StyledAppLayout = styled.div`
  display: grid;

  grid-template-rows: 1fr auto;
  height: 100vh;

  @media ${device.tablet} {
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  padding: 1.2rem 1.6rem 1rem;
  overflow: auto;

  @media ${device.tablet} {
    padding: 4rem 4.8rem 2rem;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <MobileMenu />
    </StyledAppLayout>
  );
}

export default AppLayout;
