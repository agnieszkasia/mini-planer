import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  LiaCalendarCheck,
  LiaCalendarWeekSolid,
  LiaClipboardListSolid,
} from "react-icons/lia";
import styled from "styled-components";

import { getMonthName, getToday } from "../utils/helpers";
import MonthCalendar from "../features/specialDays/MonthCalendar";
import ContentHeader from "../ui/ContentHeader";
import ButtonIcon from "../ui/ButtonIcon";
import CalendarTableHeader from "../ui/CalendarTableHeader";
import CalendarNavigation from "../ui/CalendarNavigation";

const MonthLayout = styled.div`
  overflow: hidden;
`;

function Month() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const monthValue = searchParams.get("number");
  const [monthNumber, setMonthNumber] = useState(
    monthValue ? Number(monthValue) : Number(getToday().slice(5, 7))
  );

  const yearValue = searchParams.get("year");
  const year = !yearValue ? new Date().getFullYear() : yearValue;

  const currentMonthName = getMonthName(monthNumber);

  function handlePreviousMonth() {
    let tempMonthNum = Number(monthNumber) - 1;
    let tempYearNum = Number(year);

    if (tempMonthNum < 1) {
      tempMonthNum = 12;
      tempYearNum = tempYearNum - 1;
    }

    setMonthNumber(tempMonthNum);
    navigate(`/month?number=${tempMonthNum}&year=${tempYearNum}`);
  }

  function handleNextMonth() {
    let tempMonthNum = Number(monthNumber) + 1;
    let tempYearNum = Number(year);

    if (tempMonthNum > 11) {
      tempMonthNum = 1;
      tempYearNum = tempYearNum + 1;
    }
    setMonthNumber(tempMonthNum);
    navigate(`/month?number=${tempMonthNum}&year=${tempYearNum}`);
  }

  function handleGetToday() {
    setMonthNumber(getToday().slice(5, 7));
    navigate(`/month`);
  }

  return (
    <MonthLayout>
      <ContentHeader
        mainText={`${currentMonthName} ${year}`}
        additionalText={`miesiąc ${monthNumber}`}
        navigation={
          <CalendarNavigation
            getPrevoius={handlePreviousMonth}
            getToday={handleGetToday}
            getNext={handleNextMonth}
          />
        }
      >
        <ButtonIcon onClick={() => navigate("/day")}>
          <LiaClipboardListSolid />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/week")}>
          <LiaCalendarWeekSolid />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/habit")}>
          <LiaCalendarCheck />
        </ButtonIcon>
      </ContentHeader>
      <CalendarTableHeader withShort />
      <MonthCalendar key={monthNumber + year} month={monthNumber} year={year} />
    </MonthLayout>
  );
}

export default Month;
