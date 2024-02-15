import { useQuery } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { getToday } from "../../utils/helpers";
import { getHourTasks } from "../../services/apiHourTasks";

export function useHourTasks({ dateValue }) {
  const { user } = useUser();

  const date = !dateValue ? getToday().slice(0, 10) : dateValue;
  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: [`hourTasks${dateValue}`],
    queryFn: () => getHourTasks({ date: date }, user.id),
  });

  return { isLoading, error, tasks };
}
