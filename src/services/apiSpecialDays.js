import supabase from "./supabase";

export async function getSpecialDays({ from, to }, userId) {
  const { data, error } = await supabase
    .from("special_days")
    .select("*")
    .gte("date", from)
    .lte("date", to)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Special day could not be loaded");
  }

  return data;
}

export async function createUpdateSpecialDay(newSpecialDayData, id) {
  let query = supabase.from("special_days");
  if (!id) query = query.insert(newSpecialDayData);
  if (id) query = query.update(newSpecialDayData).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Special dey could not be created");
  }

  return data;
}
