import supabase from "./supabase";

export async function getTasks({ priority = false, date }, userId) {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("priority", priority)
    .eq("date", date)
    .eq("user_id", userId)
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Tasks could not be loaded");
  }

  return data;
}

export async function updateTask(id, obj, userId) {
  const { data, error } = await supabase
    .from("tasks")
    .update(obj)
    .eq("id", id)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Task could not be updated");
  }
  return data;
}

export async function deleteTask(id, userId) {
  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Task could not be updated");
  }
}

export async function createEditTask(newTask, userId, id) {
  let query = supabase.from("tasks");
  if (!id) query = query.insert([{ ...newTask, user_id: userId }]);
  // if (id) query = query.update({ ...newCabin }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Task could not be created");
  }

  return data;
}
