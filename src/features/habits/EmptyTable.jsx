import styled from "styled-components";

const EmptyBox = styled.div`
  padding: 4rem;
  text-align: center;
`;

function EmptyTable() {
  return <EmptyBox>Nie masz jeszcze dodanych nawyków</EmptyBox>;
}

export default EmptyTable;
