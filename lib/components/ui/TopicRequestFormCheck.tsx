import { useTopicRequest } from "@/lib/components/hooks/useTopicRequest";
import { Button, ButtonBackLink } from "@/lib/components/ui/Button";
import React, { Dispatch, SetStateAction } from "react";

export default function TopicRequestFormCheck({
  theme,
  topic,
  example,
  setFormStatus,
}: {
  theme: string;
  topic: string;
  example: string;
  setFormStatus: Dispatch<
    SetStateAction<"input" | "check" | "success" | "error">
  >;
}) {
  const { submitRequest, isLoading, error, isSuccess } = useTopicRequest();
  return (
    <div className="bg-gray-50">
      {error}
      <div className="w-full bg-white p-6 rounded-lg border border-gray-200">
        {/* Title */}
        <h1 className="text-xl font-semibold text-center text-gray-800 mb-6">
          テーマ・話題のリクエスト
          <br />
          【確認画面】
        </h1>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            submitRequest({ theme, topic, example });
          }}
        >
          {/* Theme Input */}
          <div>
            <label
              htmlFor="theme"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              テーマ
            </label>
            <input
              type="text"
              id="theme"
              name="theme"
              className="focus:outline-none w-full"
              placeholder=""
              value={theme}
              readOnly
            />
          </div>

          {/* Topic Input */}
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              話題
            </label>
            <textarea
              id="topic"
              name="topic"
              placeholder=""
              value={topic}
              className="focus:outline-none w-full"
              readOnly
            ></textarea>
          </div>

          {/* Example Input */}
          <div>
            <label
              htmlFor="example"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              例
            </label>
            <textarea
              id="example"
              name="example"
              placeholder=""
              value={example}
              className="focus:outline-none w-full"
              readOnly
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            {/* Cancel Button */}
            <ButtonBackLink onClick={() => setFormStatus("input")}>
              戻る
            </ButtonBackLink>
            {/* Confirmation Button */}
            <Button type="submit">送信</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
