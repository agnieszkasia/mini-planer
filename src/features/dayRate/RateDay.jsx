import {
  FaRegFaceFrown,
  FaRegFaceMeh,
  FaRegFaceSmile,
  FaRegFaceSmileBeam,
  FaRegHeart,
} from "react-icons/fa6";
import styled from "styled-components";

import { useDayRate } from "./useDayRate";
import { useUpdateDayRate } from "./useUpdateDayRate";
import Box from "../../ui/Box";
import Spinner from "../../ui/Spinner";
import RateIcon from "./RateIcon";

const HorizontalBox = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.2rem;
`;

function RateDay() {
  const { rate, isLoading } = useDayRate();
  const { rateDay, isLoading: isLoadingRating } = useUpdateDayRate();

  function handleSetRate(rateValue) {
    rateDay({ dayRateId: rate.id, rate: rateValue });
  }

  if (isLoading || isLoadingRating) return <Spinner />;

  return (
    <Box header="OCEŃ SWÓJ DZIEŃ">
      <HorizontalBox>
        <RateIcon onClick={() => handleSetRate(1)} $checked={rate.value === 1}>
          <FaRegFaceFrown />
        </RateIcon>

        <RateIcon onClick={() => handleSetRate(2)} $checked={rate.value === 2}>
          <FaRegFaceMeh />
        </RateIcon>

        <RateIcon onClick={() => handleSetRate(3)} $checked={rate.value === 3}>
          <FaRegFaceSmile />
        </RateIcon>

        <RateIcon onClick={() => handleSetRate(4)} $checked={rate.value === 4}>
          <FaRegFaceSmileBeam />
        </RateIcon>

        <RateIcon onClick={() => handleSetRate(5)} $checked={rate.value === 5}>
          <FaRegHeart />
        </RateIcon>
      </HorizontalBox>
    </Box>
  );
}

export default RateDay;
