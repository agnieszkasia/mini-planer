import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { createHabit as createHabitApi } from "../../services/apiHabits";

export function useCreateHabit() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: createHabit, isLoading: isCreating } = useMutation({
    mutationFn: ({ newData }) => createHabitApi(newData, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`habits`],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createHabit };
}
