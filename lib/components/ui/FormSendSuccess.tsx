import { ButtonBackLink } from "@/lib/components/ui/Button";
import Link from "next/link";

const FormSendSuccess = () => {
  return (
    <div>
      <h1>送信完了</h1>
      <p>リクエストありがとうございました！</p>
      <ButtonBackLink>
        <Link href="/">TOPへ戻る</Link>
      </ButtonBackLink>
    </div>
  );
};

export default FormSendSuccess;
