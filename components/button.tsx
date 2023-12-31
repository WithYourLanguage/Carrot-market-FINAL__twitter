import { cls } from "../lib/client/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "mt-3 w-full rounded-md border border-transparent  bg-[#3B9EDB] px-4 font-medium text-white shadow-sm hover:bg-[#3B9EDB] focus:outline-none focus:ring-2 focus:ring-[#3B9EDB] focus:ring-offset-2",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
    >
      {text}
    </button>
  );
}
