import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NotProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, fetchStatus } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated && fetchStatus !== "fetching") {
      navigate("/");
    }
  }, [isLoading, isAuthenticated, fetchStatus, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isAuthenticated) return children;
}

export default NotProtectedRoute;
