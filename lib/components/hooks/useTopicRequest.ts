import { addTopicRequest } from "@/lib/db";
import { Dispatch, SetStateAction, useState } from "react";

export const useTopicRequest = (
  setFormStatus: Dispatch<
    SetStateAction<"input" | "check" | "success" | "error">
  >
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

    try {
      await addTopicRequest(theme, topic, example);
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsLoading(false);
    }
  };
  return { submitRequest, isLoading };
};
