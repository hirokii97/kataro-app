// topicsテーブルのデータ型
export type Topic = {
  id: number;
  name: string;
  color_code: string;
  sort_order: number;
};

// questionsテーブルのデータ型
export type Question = {
  id: number;
  topic_id: number;
  question_text: string;
  example_text: string | null;
  focus_text: string | null;
  sort_order: number;
};
