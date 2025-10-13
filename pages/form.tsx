import FormSendSuccess from "@/lib/components/ui/FormSendSuccess";
import TopicRequestForm from "@/lib/components/ui/TopicRequestForm";
import TopicRequestFormCheck from "@/lib/components/ui/TopicRequestFormCheck";
import React, { Activity, useState } from "react";

export default function Form() {
  const [theme, setTheme] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [example, setExample] = useState<string>("");
  const [formStatus, setFormStatus] = useState<
    "input" | "check" | "success" | "error"
  >("input");

  return (
    <div>
      <Activity mode={formStatus === "input" ? "visible" : "hidden"}>
        <TopicRequestForm
          theme={theme}
          setTheme={setTheme}
          topic={topic}
          setTopic={setTopic}
          example={example}
          setExample={setExample}
          setFormStatus={setFormStatus}
        />
      </Activity>
      <Activity mode={formStatus === "check" ? "visible" : "hidden"}>
        <TopicRequestFormCheck
          theme={theme}
          topic={topic}
          example={example}
          setFormStatus={setFormStatus}
        />
      </Activity>
      <Activity mode={formStatus === "success" ? "visible" : "hidden"}>
        <FormSendSuccess />
      </Activity>
      {/* <FormSendSuccess /> */}
      {/* <FormSendError /> */}
    </div>
  );
}
