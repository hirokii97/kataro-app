import { Question, Topic } from "@/types";

interface SelectedQuestionProps {
  topic: Topic;
  selectedQuestion: Question;
}

const SelectedQuestion = ({
  topic,
  selectedQuestion,
}: SelectedQuestionProps) => {
  return (
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
  );
};

export default SelectedQuestion;
