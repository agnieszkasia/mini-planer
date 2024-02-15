import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import styled from "styled-components";

import Box from "../../ui/Box";
import TaskList from "./TaskList";
import NewTaskBox from "./NewTaskBox";
import { useCheckingTask } from "./useCheckingTask";
import { useCreateTask } from "./useCreateTask";
import { usePriorityTasks } from "./usePriorityTasks";
import { useTasks } from "./useTasks";
import { useSettings } from "../settings/useSettings";
import Spinner from "../../ui/Spinner";
import { device } from "../../styles/devices";

const StyledToDoList = styled.div`
  display: grid;
  gap: 1.4rem;
  user-select: none;

  @media ${device.tablet} {
    gap: 4rem;
  }
`;

function ToDoList() {
  const { isLoading, tasks: normalTasks } = useTasks();
  const { isLoadingPriority, tasks: priorityTasks } = usePriorityTasks();

  const { checkTask, isLoading: isLoadingChecking } = useCheckingTask();

  const [showPriorityTaskInput, setShowPriorityTaskInput] = useState(false);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const { createTask } = useCreateTask();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  function handleCreateTask({ task }) {
    createTask({ task });
    handleCloseNewTaskBox();
  }

  function showInputForPriortyTask() {
    setShowPriorityTaskInput(true);
    setShowTaskInput(false);
  }

  function showInputForTask() {
    setShowPriorityTaskInput(false);
    setShowTaskInput(true);
  }

  async function handleCloseNewTaskBox() {
    setShowPriorityTaskInput(false);
    setShowTaskInput(false);
  }

  if (isLoading || isLoadingSettings || isLoadingPriority || isLoadingChecking)
    return <Spinner />;

  const canAddPriorityTask =
    priorityTasks?.length >= settings.num_priority_tasks;

  return (
    <StyledToDoList>
      <Box
        header="PRIORYTETY"
        icon={
          !canAddPriorityTask && !showPriorityTaskInput ? <IoAddCircle /> : null
        }
        onClick={showInputForPriortyTask}
      >
        <TaskList
          tasks={priorityTasks}
          type="priority"
          handleCheckingTask={checkTask}
        />
        {showPriorityTaskInput && (
          <NewTaskBox
            priority
            createTask={handleCreateTask}
            onEscape={handleCloseNewTaskBox}
          />
        )}
      </Box>
      <Box
        header="ZADANIA"
        icon={!showTaskInput ? <IoAddCircle /> : null}
        onClick={showInputForTask}
      >
        <TaskList
          tasks={normalTasks}
          type="normal"
          handleCheckingTask={checkTask}
        />
        {showTaskInput && (
          <NewTaskBox
            createTask={handleCreateTask}
            onEscape={handleCloseNewTaskBox}
          />
        )}
      </Box>
    </StyledToDoList>
  );
}

export default ToDoList;
