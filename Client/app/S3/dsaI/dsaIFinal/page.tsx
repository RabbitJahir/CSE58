import Link from "next/link";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Page() {
  return (
    <div>
      <main className="mid-container">

        <MarkdownRenderer file="/S3/dsa/dsa_final_syllabus.md" />
        
      </main>
    </div>
  );
}
