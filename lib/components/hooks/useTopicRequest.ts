import { addTopicRequest } from "@/lib/db";
import { useState } from "react";

export const useTopicRequest = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitRequest = async ({
    theme,
    topic,
    example,
  }: {
    theme: string;
    topic: string;
    example: string;
  }) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    // テーマ、トピックは必須項目にする
    if (theme === "" || topic === "") {
      setError("テーマと話題は必須項目です！");
      setIsLoading(false);
      return;
    }

    try {
      await addTopicRequest(theme, topic, example);
      setIsSuccess(true);
    } catch (error) {
      setError(
        "提案の送信中にエラーが発生しました。時間をおいて再度お試しください。"
      );
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  return { submitRequest, isLoading, error, isSuccess };
};
