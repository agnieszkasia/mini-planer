import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { getToday } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { createEditTask } from "../../services/apiTasks";

export function useCreateTask() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const dateValue = searchParams.get("date");
  const date = !dateValue ? getToday().slice(0, 10) : dateValue;

  const { mutate: createTask, isLoading: isCreating } = useMutation({
    mutationFn: ({ task }) => createEditTask({ ...task, date: date }, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["priorityTasks"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createTask };
}
