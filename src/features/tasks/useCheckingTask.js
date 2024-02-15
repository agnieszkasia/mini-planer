import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { updateTask } from "../../services/apiTasks";

export function useCheckingTask() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: checkTask, isLoading } = useMutation({
    mutationFn: ({ taskId, done }) =>
      updateTask(
        taskId,
        {
          done: done,
        },
        user.id
      ),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkTask, isLoading };
}
