import { IDStyles } from "styles";
import Link from "next/link";
import { FriendsDescribe } from ".";
import { Greeting } from "components/utils";

export const BioBegin = () => {
  return (
    <div className={`text-justify max-w-xl`}>
      <Greeting />
      My name is{" "}
      <i>
        <b>Alex Harris</b>
      </i>{" "}
      and I am a Graduate student at{" "}
      <Link href="https://www.pdx.edu/" legacyBehavior>
        <a id={IDStyles.UniLink} target="_blank" rel="noopener noreferrer">
          Portland State University
        </a>
      </Link>
      . I have completed my Undergrad program at the{" "}
      <Link href="https://www.pdx.edu/engineering/" legacyBehavior>
        <a id={IDStyles.UniLink} target="_blank" rel="noopener noreferrer">
          Maseeh College of Engineering and Computer Science
        </a>
      </Link>{" "}
      and obtained a Bachelors of Science in Computer Science, and completing a
      minor in Mathematics.
      <div className="max-lg:hidden mt-4"> {<FriendsDescribe />}</div>
    </div>
  );
};

export default BioBegin;
