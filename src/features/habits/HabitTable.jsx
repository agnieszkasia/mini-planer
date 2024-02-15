import styled from "styled-components";

import { useHabits } from "./useHabits";
import { getMonthDays, getTodayDate } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import EmptyTable from "./EmptyTable";
import HabitCheckingTable from "./HabitCheckingTable";
import HabitNames from "./HabitNames";

const HabitTableBox = styled.div`
  display: flex;
`;

const ContentBox = styled.div`
  width: 100%;
  position: relative;
  overflow-x: auto;
`;

const HabitNamesBox = styled.div`
  position: relative;
`;

function HabitTable({ month, year, addNew, setAddNew }) {
  const { habits, isLoading: isLoadingHabits } = useHabits();
  const days = getMonthDays(month, year);
  const currentDate = getTodayDate();

  if (isLoadingHabits) return <Spinner />;

  return (
    <HabitTableBox>
      <ContentBox>
        {habits.length > 0 ? (
          <HabitCheckingTable
            days={days}
            currentDate={currentDate}
            month={month}
            habits={habits}
          />
        ) : (
          !addNew && <EmptyTable />
        )}
      </ContentBox>

      <HabitNamesBox>
        <HabitNames habits={habits} addNew={addNew} setAddNew={setAddNew} />
      </HabitNamesBox>
    </HabitTableBox>
  );
}

export default HabitTable;
