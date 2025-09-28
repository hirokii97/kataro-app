import { getAllTopics, getQuestionsByTopicId } from "@/lib/db";
import QuestionArea from "@/lib/components/feature/QuestionArea";
import { Question, Topic } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface TopicProps {
  topic: Topic;
  questions: Question[];
}

export default function TopicPage({ topic, questions }: TopicProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return <QuestionArea topic={topic} questions={questions} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = await getAllTopics();

  const paths = topics.map((topic) => {
    return {
      params: {
        topic: topic.name.toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TopicProps> = async ({
  params,
}) => {
  const allTopics = await getAllTopics();
  const topicData = allTopics.find((t) => t.name === (params!.topic as string));

  if (!topicData) {
    return { notFound: true };
  }

  const questionData = await getQuestionsByTopicId(topicData.id);

  return {
    props: {
      topic: topicData,
      questions: questionData,
    },
    revalidate: 60,
  };
};
