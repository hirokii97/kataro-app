import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { Button, ButtonLink } from "@/lib/components/ui/Button";

interface ModalLayoutProps {
  children: ReactNode;
  isOpen: boolean;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ children, isOpen }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  const modalClasses = `
    fixed inset-0 z-50 transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-y-0" : "translate-y-full"} 
    bg-white shadow-2xl
  `;

  return (
    <div className={modalClasses}>
      <div className="p-4 border-b border-gray-200 top-0 bg-white z-10 flex justify-end">
        <button
          onClick={handleClose}
          className="text-gray-600 hover:text-gray-900 text-3xl font-semibold relative left-0"
          aria-label="話題を閉じる"
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        {children}
        <div className="flex items-center justify-center">
          <Button onClick={handleClose} aria-label="話題を閉じる">
            閉じる
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
