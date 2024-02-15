import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getToday } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { getDayRate } from "../../services/apiDayRate";

export function useDayRate() {
  const {user} = useUser();
  const [searchParams] = useSearchParams();

  const dateValue = searchParams.get("date");
  const date = !dateValue ? getToday().slice(0, 10) : dateValue;

  const {
    isLoading,
    data: rate,
    error,
  } = useQuery({
    queryKey: ["rateDay"],
    queryFn: () => getDayRate({ date: date }, user.id),
  });

  return { isLoading, error, rate };
}
