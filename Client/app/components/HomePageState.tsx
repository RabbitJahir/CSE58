"use client";

import { useState } from "react";
import Link from "next/link";

type Item = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function HomePageState({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <button
            className="homebox"
            onClick={() =>
              setOpen((prev) => (prev === item.id ? null : item.id))
            }
          >
            {item.title}
          </button>

          {open === item.id && (
            <div className="homebox">{item.content}</div>
          )}
        </div>
      ))}
    </>
  );
}