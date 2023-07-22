import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-white"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        {...register}
        className="w-full   appearance-none rounded-md border border-gray-700 bg-black px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#3B9EDB] focus:outline-none focus:ring-[#3B9EDB] "
        rows={4}
        {...rest}
      />
    </div>
  );
}
