import { ButtonBackLink } from "@/lib/components/ui/Button";
import Link from "next/link";

const FormSendSuccess = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <img src="./send_success.png" alt="" />
      </div>
      <h1 className="">送信完了</h1>
      <p className="text-center">リクエストありがとうございます！</p>
      <div className="mt-10">
        <ButtonBackLink>
          <Link href="/">TOPへ戻る</Link>
        </ButtonBackLink>
      </div>
    </div>
  );
};

export default FormSendSuccess;
