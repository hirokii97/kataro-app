import { ButtonBackLink } from "@/lib/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const FormSendSuccess = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <Image src="/send_success.png" alt="" width={200} height={200} />
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
