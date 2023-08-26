import { styles } from "styles";
import Link from "next/link";
import { FriendsDescribe } from ".";
import { SystemTimeGreeting as Greeting } from "..";

export const BioBegin = () => {
  return (
    <text className={`text-justify max-w-xl`}>
      <Greeting />
      My name is{" "}
      <i>
        <b>Alex Harris</b>
      </i>{" "}
      and I am a Graduate student at{" "}
      <Link href="https://www.pdx.edu/" id={styles.unilink}>
        Portland State University
      </Link>
      {"."}
      <br />
      <br />I have completed my Undergrad program at the{" "}
      <Link href="https://www.pdx.edu/engineering/" id={styles.unilink}>
        Maseeh College of Engineering and Computer Science
      </Link>{" "}
      and obtained a Bachelors of Science in Computer Science, and completing a
      minor in Mathematics.
      <text className="max-lg:hidden">
        {" "}
        <br />
        <br />
        {<FriendsDescribe />}
      </text>
    </text>
  );
};

export default BioBegin;
