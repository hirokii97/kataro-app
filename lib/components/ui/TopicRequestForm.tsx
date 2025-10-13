import { Button, ButtonBackLink } from "@/lib/components/ui/Button";
import Link from "next/link";
import React from "react";

type TopicRequestFormProps = {
  theme: string;
  setTheme: (value: string) => void;
  topic: string;
  setTopic: (value: string) => void;
  example: string;
  setExample: (value: string) => void;
  setFormStatus: (status: "input" | "check" | "success" | "error") => void;
};

const TopicRequestForm: React.FC<TopicRequestFormProps> = ({
  theme,
  setTheme,
  topic,
  setTopic,
  example,
  setExample,
  setFormStatus,
}) => {
  return (
    <div className="bg-gray-50">
      <div className="w-full bg-white p-6 rounded-lg border border-gray-200">
        {/* Title */}
        <h1 className="text-xl font-semibold text-center text-gray-800 mb-6">
          テーマ・話題のリクエスト
          <br />
          【入力画面】
        </h1>

        <div className="space-y-6">
          {/* Theme Input */}
          <div>
            <label
              htmlFor="theme"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              テーマ（例：人生）
            </label>
            <input
              type="text"
              id="theme"
              name="theme"
              maxLength={100}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 h-10"
              placeholder=""
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>

          {/* Topic Input */}
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              話題（例：人生で絶対成し遂げたいことは？）
            </label>
            <textarea
              id="topic"
              name="topic"
              maxLength={150}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 resize-none"
              placeholder=""
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            ></textarea>
          </div>

          {/* Example Input */}
          <div>
            <label
              htmlFor="example"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              例（例：47都道府県全て行く！、オーロラみたい！）
            </label>
            <textarea
              id="example"
              name="example"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 resize-none"
              placeholder=""
              maxLength={500}
              value={example}
              onChange={(e) => setExample(e.target.value)}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            {/* Cancel Button */}
            <ButtonBackLink>
              <Link
                href="/"
              >
                キャンセル
              </Link>
            </ButtonBackLink>

            {/* Confirmation Button */}
            <Button type="button" onClick={() => setFormStatus("check")}>
              確認画面へ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicRequestForm;
