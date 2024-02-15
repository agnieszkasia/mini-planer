import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useUser } from "../authentication/useUser";
import { deleteTask as deleteTaskApi } from "../../services/apiTasks";

export function useDeleteTask() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { isDeleting, mutate: deleteTask } = useMutation({
    mutationFn: (id) => deleteTaskApi(id, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["priorityTasks"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTask };
}
