import supabase from "./supabase";

export async function getHabits(userId) {
  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Habits could not get loaded");
  }

  return data;
}

export async function createHabit(newData, userId) {
  let query = supabase.from("habits");
  query = query.insert([{ ...newData, user_id: userId }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Habit could not be created");
  }

  return data;
}

export async function deleteHabit(id, userId) {
  const { error } = await supabase
    .from("habits")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Habit could not be deleted");
  }
}
