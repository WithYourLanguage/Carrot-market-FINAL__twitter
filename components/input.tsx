import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price" | "password";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
}: InputProps) {
  return (
    <div className="mt-1">
      <label
        className="mb-1 block text-sm font-medium text-gray-200"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative flex items-center  rounded-md shadow-sm">
        <input
          id={name}
          type={type}
          {...register}
          required={required}
          className="w-full   appearance-none rounded-md border border-gray-700 bg-black px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#3B9EDB] focus:outline-none focus:ring-[#3B9EDB]"
        />
      </div>
    </div>
  );
}
