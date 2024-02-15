import { useNavigate, useSearchParams } from "react-router-dom";
import {
  LiaCalendar,
  LiaCalendarCheck,
  LiaCalendarWeekSolid,
} from "react-icons/lia";
import styled from "styled-components";

import {
  getDate,
  getDayName,
  getMonthNameForDay,
  getNextDayDate,
  getPreviousDayDate,
  getToday,
} from "../utils/helpers";
import { device } from "../styles/devices";
import { useSettings } from "../features/settings/useSettings";
import ToDoList from "../features/tasks/ToDoList";
import RateDay from "../features/dayRate/RateDay";
import ButtonIcon from "../ui/ButtonIcon";
import ContentHeader from "../ui/ContentHeader";
import CalendarNavigation from "../ui/CalendarNavigation";

const DayLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ContentBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1rem;

  @media ${device.tablet} {
    padding-bottom: 2.8rem;
    gap: 4rem;
  }
`;

function Day() {
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const dateValue = searchParams.get("date") ?? getToday().slice(0, 10);
  const currentDate = getDate(dateValue);

  const header =
    currentDate.getDate() + " " + getMonthNameForDay(currentDate.getMonth());
  const dayName = getDayName(currentDate);

  function handlePreviousDay() {
    const date = getPreviousDayDate(currentDate);
    navigate(`/day?date=${date}`);
  }

  function handleNextDay() {
    const date = getNextDayDate(currentDate);
    navigate(`/day?date=${date}`);
  }

  function handleGetToday() {
    navigate(`/day`);
  }

  if (isLoadingSettings) return null;

  return (
    <DayLayout>
      <ContentHeader
        mainText={header}
        additionalText={dayName}
        navigation={
          <CalendarNavigation
            getPrevoius={handlePreviousDay}
            getToday={handleGetToday}
            getNext={handleNextDay}
          />
        }
      >
        <ButtonIcon onClick={() => navigate("/week")}>
          <LiaCalendarWeekSolid />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/month")}>
          <LiaCalendar />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/habit")}>
          <LiaCalendarCheck />
        </ButtonIcon>
      </ContentHeader>

      <ContentBody>
        <ToDoList key={dateValue} />
        {settings.rate_day && <RateDay />}
      </ContentBody>
    </DayLayout>
  );
}

export default Day;
