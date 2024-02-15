import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  LiaCalendar,
  LiaCalendarWeekSolid,
  LiaClipboardListSolid,
} from "react-icons/lia";
import { IoAddCircle } from "react-icons/io5";
import styled from "styled-components";

import { getMonthName, getToday } from "../utils/helpers";
import ButtonIcon from "../ui/ButtonIcon";
import ContentHeader from "../ui/ContentHeader";
import CalendarNavigation from "../ui/CalendarNavigation";
import HabitTable from "../features/habits/HabitTable";

const HabitLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
`;

function Habit() {
  const [addNew, setAddNew] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const monthValue = searchParams.get("number");
  const [monthNumber, setMonthNumber] = useState(
    monthValue ? Number(monthValue) : Number(getToday().slice(5, 7))
  );

  const yearValue = searchParams.get("year");
  const year = !yearValue ? new Date().getFullYear() : yearValue;

  const currentMonthName = getMonthName(monthNumber);

  async function handlePreviousMonth() {
    let tempMonthNum = Number(monthNumber) - 1;
    let tempYearNum = Number(year);

    if (tempMonthNum < 1) {
      tempMonthNum = 12;
      tempYearNum = tempYearNum - 1;
    }

    setMonthNumber(tempMonthNum);
    navigate(`/habit?number=${tempMonthNum}&year=${tempYearNum}`);
  }

  async function handleNextMonth() {
    let tempMonthNum = Number(monthNumber) + 1;
    let tempYearNum = Number(year);

    if (tempMonthNum > 11) {
      tempMonthNum = 1;
      tempYearNum = tempYearNum + 1;
    }
    setMonthNumber(tempMonthNum);
    navigate(`/habit?number=${tempMonthNum}&year=${tempYearNum}`);
  }

  function handleGetToday() {
    setMonthNumber(Number(getToday().slice(5, 7)));
    navigate(`/habit`);
  }

  return (
    <HabitLayout>
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
        {!addNew && (
          <ButtonIcon onClick={() => setAddNew(true)}>
            <IoAddCircle />
          </ButtonIcon>
        )}
        <ButtonIcon onClick={() => navigate("/day")}>
          <LiaClipboardListSolid />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/week")}>
          <LiaCalendarWeekSolid />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/month")}>
          <LiaCalendar />
        </ButtonIcon>
      </ContentHeader>
      <HabitTable
        key={monthNumber}
        month={monthNumber}
        year={year}
        addNew={addNew}
        setAddNew={setAddNew}
      />
    </HabitLayout>
  );
}

export default Habit;
