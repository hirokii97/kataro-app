import { ComponentProps } from "react";

export const Button = ({
  children,
  ...componentProps
}: ComponentProps<"button">) => {
  return (
    <button
      {...componentProps}
      className="w-50 flex justify-center py-2 px-4 border border-blue-400 rounded-full shadow-sm text-base font-medium bg-blue-50 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};
