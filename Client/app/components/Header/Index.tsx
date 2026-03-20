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
    <header className="s12header flex justify-between items-center p-4 bg-gray-900 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/favicon.ico" alt="logo" width={32} height={32} />
      </div>

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
