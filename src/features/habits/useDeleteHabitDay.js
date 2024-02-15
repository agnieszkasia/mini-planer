import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteHabitDay as deleteHabitDayApi } from "../../services/apiHabitDays";

export function useDeleteHabitDay({ id }) {
  const queryClient = useQueryClient();

  const { isDeleting, mutate: deleteHabitDay } = useMutation({
    mutationFn: deleteHabitDayApi,
    onSuccess: () => {
      toast.success("Habit day successfully deleted");
      queryClient.invalidateQueries({
        queryKey: [`habit_days_${id}`],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteHabitDay };
}
