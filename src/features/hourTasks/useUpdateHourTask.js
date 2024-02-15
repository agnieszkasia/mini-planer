import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { createUpdateHourTask } from "../../services/apiHourTasks";

export function useUpdateHourTask() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: editTask, isLoading: isEditing } = useMutation({
    mutationFn: ({ newTaskData, id }) =>
      createUpdateHourTask({ ...newTaskData, user_id: user.id }, id),
    onSuccess: () => {
      toast.success("Task successfully edited.");
      queryClient.invalidateQueries({ queryKey: ["hourTasks"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTask };
}
