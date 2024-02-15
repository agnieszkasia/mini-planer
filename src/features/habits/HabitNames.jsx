import styled from "styled-components";
import { IoClose } from "react-icons/io5";

import { useDeleteHabit } from "./useDeleteHabit";
import ButtonIcon from "../../ui/ButtonIcon";
import LightIcon from "../../ui/LightIcon";
import NewHabitRow from "./NewHabitRow";

const HabitNamesTable = styled.table`
  border-spacing: 0;
`;

const HabitName = styled.td`
  min-width: 12rem;
  height: 3.2rem;
  display: flex;
  justify-content: space-between;
  cursor: default;
  border-top: 1px solid var(--color-grey-300);
  align-items: center;
`;

function HabitNames({ habits, addNew, setAddNew }) {
  const { deleteHabit } = useDeleteHabit();
  function handleDelete(id) {
    deleteHabit(id);
  }
  return (
    <HabitNamesTable>
      <tbody>
        <tr>
          <th>
            <br />
          </th>
        </tr>
        {habits.map((habit) => (
          <tr key={habit.id}>
            <HabitName>
              {habit.name}
              <LightIcon
                as={ButtonIcon}
                size="small"
                onClick={() => handleDelete(habit.id)}
              >
                <IoClose />
              </LightIcon>
            </HabitName>
          </tr>
        ))}
        {addNew && <NewHabitRow setAddNew={setAddNew} />}
      </tbody>
    </HabitNamesTable>
  );
}

export default HabitNames;
