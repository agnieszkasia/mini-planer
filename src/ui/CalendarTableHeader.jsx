import PropTypes from "prop-types";
import styled from "styled-components";

import { getTodayDate } from "../utils/helpers";
import DayHeader from "./DayHeader";
import useDimensions from "../hooks/useDimensions";

const StyledCalendarHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-right: ${({ $week }) => ($week ? "6px" : "0")};
  position: sticky;
  top: 0;
  z-index: 2;
`;

const DAYS_NAMES = [
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
  "niedziela",
];

const SHORT_DAYS_NAMES = ["pn", "wt", "śr", "czw", "pt", "sob", "nd"];

function CalendarTableHeader({ days, withShort = false }) {
  const { width } = useDimensions();
  const useSmallDevice = width < 768;
  const currentDay = getTodayDate();

  const daysNames = useSmallDevice && withShort ? SHORT_DAYS_NAMES : DAYS_NAMES;

  return (
    <StyledCalendarHeader $week={days?.length > 0 ? true : false}>
      {daysNames.map((dayName, i) => (
        <DayHeader
          name={dayName}
          number={days?.at(i) ? days.at(i).date.getDate() : null}
          key={dayName}
          isActive={days?.at(i).date.toISOString().slice(0, 10) === currentDay}
        />
      ))}
    </StyledCalendarHeader>
  );
}

CalendarTableHeader.propTypes = {
  dayNumbers: PropTypes.array,
};

export default CalendarTableHeader;
