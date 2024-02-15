import { useQuery } from "@tanstack/react-query";
import { getHabitDays } from "../../services/apiHabitDays";

export function useHabitDays({ habitId }) {
  const {
    isLoading,
    data: habitDays,
    error,
  } = useQuery({
    queryKey: [`habit_days_${habitId}`],
    queryFn: () => getHabitDays({ habitId }),
  });

  return { isLoading, error, habitDays };
}
