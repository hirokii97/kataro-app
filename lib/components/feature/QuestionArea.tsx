import { useRouter } from "next/router";
import { Question, Topic } from "@/types";
import { useMemo } from "react";

interface QuestionAreaProps {
  topic: Topic;
  questions: Question[];
}

const QuestionArea: React.FC<QuestionAreaProps> = ({ topic, questions }) => {
  const router = useRouter();

  const selectedQuestionId = router.query.q_id
    ? Number(router.query.q_id)
    : null;

  const selectedQuestion = useMemo(() => {
    return questions.find((q) => q.id === selectedQuestionId) || null;
  }, [questions, selectedQuestionId]);

  const handleQuestionClick = (question: Question) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, q_id: question.id },
      },
      undefined,
      { shallow: true }
    );
  };

  const questionBlockStyle =
    "p-4 rounded-xl shadow-md cursor-pointer transition-all duration-150 hover:shadow-lg active:scale-[0.99] text-gray-800 bg-white";
  const questionTextStyle = "font-semibold";

  return (
    <div className="space-y-6">
      <div
        className="p-5 rounded-2xl text-white shadow-xl"
        style={{ backgroundColor: topic.color_code }}
      >
        {selectedQuestion ? (
          <div className="space-y-3">
            <p className="text-sm opacity-80">{topic.display_name}</p>
            <h3 className="text-2xl font-extrabold">
              {selectedQuestion.question_text}
            </h3>
            {selectedQuestion.example_text && (
              <p className="text-sm font-medium pt-2 border-t border-white border-opacity-30">
                例: {selectedQuestion.example_text}
              </p>
            )}
          </div>
        ) : (
          <h3 className="text-2xl font-extrabold">{topic.display_name}の話題をタップ！</h3>
        )}
      </div>

      <div className="space-y-3">
        {questions.map((question) => {
          const isSelected = question.id === selectedQuestionId;

          // 選択されている質問はリストから除外する（UIを整理するため）
          if (isSelected) return null;

          return (
            <div
              key={question.id}
              className={questionBlockStyle}
              onClick={() => handleQuestionClick(question)}
            >
              <p className={questionTextStyle}>{question.question_text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionArea;
