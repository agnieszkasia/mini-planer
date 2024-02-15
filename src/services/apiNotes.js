import supabase from "./supabase";

export async function getNotes({ from, to }, userId) {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .gte("date", from)
    .lte("date", to)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Notes could not get loaded");
  }

  return data;
}

export async function createUpdateNote(newNote, id) {
  let query = supabase.from("notes");
  if (!id) query = query.insert([newNote]);
  if (id) query = query.update(newNote).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  return data;
}
