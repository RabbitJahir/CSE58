// components/Header/index.tsx
import Link from "next/link";
import Image from "next/image";

type LinkItem = {
  href: string;
  label: string;
  className?: string;
};

type HeaderProps = {
  links?: LinkItem[];
};

export default function Header({ links = [] }: HeaderProps) {
  return (
    <header className="flex items-center justify-center gap-4 p-4 dark:bg-black/30 backdrop-blur-sm relative">
      {/* Logo */}

      <Image src="/favicon.ico" alt="logo" width={32} height={32} />

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-2">
        {links.map(({ href, label, className }, index) => (
          <Link
            key={index}
            href={href}
            className={
              className
                ? className
                : "px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
            }
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
