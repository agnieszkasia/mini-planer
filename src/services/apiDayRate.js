import supabase from "./supabase";

export async function getDayRate({ date }, userId) {
  const { data, error } = await supabase
    .from("day_rates")
    .select("*")
    .eq("date", date)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Day rate could not be loaded");
  }
  if (!data.length) return { value: null, date: date };

  return data?.at(0);
}

export async function updateDayRate(id, obj, userId) {
  const { data, error } = await supabase
    .from("day_rates")
    .update(obj)
    .eq("id", id)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Day rate could not be updated");
  }
  return data;
}

export async function createDayRate(id, obj) {
  const { data, error } = await supabase.from("day_rates").insert(obj).select();

  if (error) {
    console.error(error);
    throw new Error("Day rate could not be created");
  }
  return data;
}
