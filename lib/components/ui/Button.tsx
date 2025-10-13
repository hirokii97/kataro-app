import { ComponentProps } from "react";

export const Button = ({
  children,
  ...componentProps
}: ComponentProps<"button">) => {
  return (
    <button
      {...componentProps}
      className="w-50 flex justify-center py-2 px-4 border border-blue-400 rounded-xl shadow-sm text-base font-medium bg-blue-50 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50  disabled:bg-gray-400 disabled:border-none disabled:hover:text-black transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  ...componentProps
}: ComponentProps<"div">) => {
  return (
    <div
      {...componentProps}
      className="w-50 flex justify-center py-2 px-4 border border-blue-400 rounded-xl shadow-sm text-base font-medium bg-blue-50 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
    >
      {children}
    </div>
  );
};

export const ButtonBackLink = ({
  children,
  ...componentProps
}: ComponentProps<"div">) => {
  return (
    <div
      {...componentProps}
      className="w-50 flex justify-center py-2 px-4 border text-gray-700 bg-white hover:bg-gray-50  rounded-xl shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out"
    >
      {children}
    </div>
  );
};
