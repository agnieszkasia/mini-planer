import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getToday } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { getTasks } from "../../services/apiTasks";

export function useTasks() {
  const { user } = useUser();
  const [searchParams] = useSearchParams();

  const dateValue = searchParams.get("date");
  const date = !dateValue ? getToday().slice(0, 10) : dateValue;

  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks({ priority: false, date }, user.id),
  });

  return { isLoading, error, tasks };
}
