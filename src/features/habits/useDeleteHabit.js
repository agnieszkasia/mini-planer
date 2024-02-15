import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteHabit as deleteHabitApi } from "../../services/apiHabits";
import { useUser } from "../authentication/useUser";

export function useDeleteHabit() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { isDeleting, mutate: deleteHabit } = useMutation({
    mutationFn: (id) => deleteHabitApi(id, user.id),
    onSuccess: () => {
      toast.success("Nawyk usunięto pomyślnie");
      queryClient.invalidateQueries({
        queryKey: [`habits`],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteHabit };
}
