import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  LiaCalendar,
  LiaCalendarCheck,
  LiaClipboardListSolid,
} from "react-icons/lia";
import styled from "styled-components";

import ContentHeader from "../ui/ContentHeader";
import ButtonIcon from "../ui/ButtonIcon";
import WeekCalendar from "../features/hourTasks/WeekCalendar";
import {
  getMonthNameByDates,
  getWeekDays,
  getWeekNumber,
} from "../utils/helpers";
import CalendarNavigation from "../ui/CalendarNavigation";

const WeekTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
`;

function Week() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const weekValue = searchParams.get("number");
  const [weekNumber, setWeekNumber] = useState(
    weekValue ? Number(weekValue) : getWeekNumber()
  );

  const yearValue = searchParams.get("year");
  const year = !yearValue ? new Date().getFullYear() : yearValue;

  const weekDays = getWeekDays(year, weekNumber);
  const currentMonthName = getMonthNameByDates(
    weekDays.at(0).date,
    weekDays.at(weekDays.length - 1).date
  );

  function handlePreviousWeek() {
    let tempWeekNum = Number(weekNumber) - 1;
    let tempYearNum = Number(year);

    if (tempWeekNum < 1) {
      tempWeekNum = getWeekNumber(
        new Date(tempYearNum, 0, 1 - 7, 2).toISOString().slice(0, 10)
      );
      tempYearNum = tempYearNum - 1;
    }
    setWeekNumber(tempWeekNum);
    navigate(`/week?number=${tempWeekNum}&year=${tempYearNum}`);
  }

  function handleNextWeek() {
    let tempWeekNum = Number(weekNumber) + 1;
    let tempYearNum = Number(year);

    if (tempWeekNum > 52) {
      tempWeekNum = 1;
      tempYearNum = tempYearNum + 1;
    }
    setWeekNumber(tempWeekNum);
    navigate(`/week?number=${tempWeekNum}&year=${tempYearNum}`);
  }

  function handleGetToday() {
    setWeekNumber(getWeekNumber());
    navigate(`/week`);
  }

  return (
    <WeekTemplate>
      <ContentHeader
        mainText={`${currentMonthName} ${year}`}
        additionalText={`tydzień ${weekNumber}`}
        navigation={
          <CalendarNavigation
            getPrevoius={handlePreviousWeek}
            getToday={handleGetToday}
            getNext={handleNextWeek}
          />
        }
      >
        <ButtonIcon onClick={() => navigate("/day")}>
          <LiaClipboardListSolid />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/month")}>
          <LiaCalendar />
        </ButtonIcon>

        <ButtonIcon onClick={() => navigate("/habit")}>
          <LiaCalendarCheck />
        </ButtonIcon>
      </ContentHeader>

      <WeekCalendar
        weekDays={weekDays}
        weekNumber={weekNumber}
        key={weekNumber}
        year={year}
      />
    </WeekTemplate>
  );
}

export default Week;
