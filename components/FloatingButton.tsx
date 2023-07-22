import Link from "next/link";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link legacyBehavior href={href}>
      <a className="fixed bottom-24 right-5 flex aspect-square w-14 cursor-pointer  items-center justify-center rounded-full border-0 border-transparent bg-[#3B9EDB] text-white shadow-xl transition-colors ">
        {children}
      </a>
    </Link>
  );
}
