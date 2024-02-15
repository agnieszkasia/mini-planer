import styled from "styled-components";
import { device } from "../../styles/devices";

const RateIcon = styled.div`
  background-image: ${({ $checked }) =>
    $checked ? "url(checked-small.png)" : ""};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  padding: 0.4rem 0.6rem 0.2rem;
  line-height: 0.2rem;
  cursor: url(pencil.png), pointer;

  & svg {
    width: 1rem;
  }

  @media ${device.tablet} {
    & svg {
      width: fit-content;
    }
  }
`;

export default RateIcon;
