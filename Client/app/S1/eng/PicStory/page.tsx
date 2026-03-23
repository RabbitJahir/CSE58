import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header/Index";

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1 Page`, className: `HeaderButton` },
  { href: `/S1/eng`, label: `English Page`, className: `HeaderButton` },
];
export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Picture Story Writing Page</h1>

        <ul>
          <li>
            <b>Story Writing Guidelines</b> <br />
            <br />
            Craft a literal story with creativity and depth. <br />
            You have full freedom—develop engaging paragraphs, incorporate
            dialogue, and experiment with narrative techniques such as
            <b>prolepsis (flash-forward)</b> or <b>analepsis (flashback)</b>.
            <br />
            Use <b>figures of speech</b> to enrich your writing, and employ
            <b>descriptive language</b> to create <b>vivid imagery</b> that
            allows the reader to see, hear, and feel every scene.
            <br />
            Use past tense for a classic, clear story or present tense for a
            dramatic, “in-the-moment” feeling <br />
            <br />
            Focus on
            <b> character development</b>—give your characters distinct
            personalities, desires, and conflicts that drive the story forward.
            Ensure your plot is <b>cohesive and compelling</b>, with a clear
            beginning, middle, and end. Integrate
            <b>quotations or internal thoughts</b> to add depth and realism.
            <br />
            <br />
            Aim for a <b> minimum of 200 words</b>, maintaining proper
            <b>punctuation, grammar, and capitalization</b> throughout. Engage
            your reader by balancing narrative pace, descriptive passages, and
            dialogue. Remember, a strong story combines <b> vivid settings</b>,
            <b>relatable characters</b>, and <b> meaningful events</b> into a
            memorable experience.
          </li>
        </ul>

        <ul>
          <b>Some examples, click the pictures.</b>
        </ul>
        <div className="flex flex-row gap-10">
          <Link href="/S1/eng/PicStory/Pic_1">
            <Image
              src="/S1/eng/pic_1.jpeg"
              alt="Picture 1"
              width={1200}
              height={1200}
            />
          </Link>
          <Link href="/S1/eng/PicStory/Pic_2">
            <Image
              src="/S1/eng/pic_2.jpeg"
              alt="Picture 2"
              width={1200}
              height={1200}
            />
          </Link>
          <Link href="/S1/eng/PicStory/Pic_3">
            <Image
              src="/S1/eng/pic_3.jpeg"
              alt="Picture 3"
              width={1200}
              height={1200}
            />
          </Link>
          <Link href="/S1/eng/PicStory/Pic_4">
            <Image
              src="/S1/eng/pic_4.jpeg"
              alt="Picture 4"
              width={1200}
              height={1200}
            />
          </Link>
          <Link href="/S1/eng/PicStory/Pic_5">
            <Image
              src="/S1/eng/pic_5.jpeg"
              alt="Picture 5"
              width={1200}
              height={1200}
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
