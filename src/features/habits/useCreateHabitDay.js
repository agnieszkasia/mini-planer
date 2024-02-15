import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createHabitDay as createHabitDayApi } from "../../services/apiHabitDays";

export function useCreateHabitDay({ id }) {
  const queryClient = useQueryClient();

  const { mutate: createHabitDay, isLoading: isCreating } = useMutation({
    mutationFn: ({ newData }) => createHabitDayApi(newData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`habit_days_${id}`],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createHabitDay };
}
