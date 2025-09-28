import { getAllTopics } from "@/lib/db";
import TopicCard from "@/lib/components/ui/TopicCard";
import { Topic } from "@/types";

interface HomePageProps {
  topics: Topic[];
}

// 話題一覧
export default function Home({ topics }: HomePageProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
        何についてKATARU？
      </h2>
      {/* Topics一覧 */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            name={topic.name}
            displayName={topic.display_name}
            colorCode={topic.color_code}
          />
        ))}
      </div>
      {topics.length === 0 && (
        <p className="text-gray-500 mt-8">
          話題を取得できませんでした。データベースを確認してください。
        </p>
      )}
    </div>
  );
}

// SSG
export const getStaticProps = async () => {
  try {
    const allTopics = await getAllTopics();

    return {
      props: {
        topics: allTopics,
      },
      // revalidate: 3600 * 12
    };
  } catch (error) {
    console.error("Home page data fetching failed", error);
    return {
      props: {
        topics: [],
      },
      revalidate: 60,
    };
  }
};
