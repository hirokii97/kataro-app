import { supabase } from "@/lib/supabase";
import { Question, Topic } from "@/types";

// 全ての話題（topic)を取得
export async function getAllTopics(): Promise<Topic[]> {
  const { data, error } = await supabase
    .from("topics")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching topics", error);
    throw new Error("failed to fetch topics data");
  }

  return data as Topic[];
}

export async function getQuestionsByTopicId(
  topicId: number
): Promise<Question[]> {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("topic_id", topicId)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`error fetching questions for topic ${topicId}`, error);
  }
  return data as Question[];
}
