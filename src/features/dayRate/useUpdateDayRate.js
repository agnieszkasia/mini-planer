import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import { getToday } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { createDayRate, updateDayRate } from "../../services/apiDayRate";

export function useUpdateDayRate() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const dateValue = searchParams.get("date");
  const date = !dateValue ? getToday().slice(0, 10) : dateValue;

  const { mutate: rateDay, isLoading } = useMutation({
    mutationFn: ({ dayRateId, rate }) => {
      if (dayRateId)
        return updateDayRate(
          dayRateId,
          {
            value: rate,
          },
          user.id
        );
      else
        return createDayRate(dayRateId, {
          value: rate,
          date: date,
          user_id: user.id,
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while rating"),
  });

  return { rateDay, isLoading };
}
