import { ButtonBackLink } from "@/lib/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const FormSendError = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image src="/sorry.png" alt="" width={200} height={200} />
      </div>
      <h1>送信エラー</h1>
      <p className="mt-4 text-center">
        通信エラーなどで <br />
        送信ができませんでした。
      </p>
      <p className="mt-4 text-center">
        お手数ですが、時間をおいて <br />
        もう一度ご入力ください。
      </p>
      <div className="mt-10">
        <ButtonBackLink>
          <Link href="/">TOPへ戻る</Link>
        </ButtonBackLink>
      </div>
    </div>
  );
};

export default FormSendError;
