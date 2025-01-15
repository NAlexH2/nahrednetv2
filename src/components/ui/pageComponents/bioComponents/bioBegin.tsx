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
                <b>Nicholas Alexander Harris,</b>
            </i>{" "}
            though I go by Alex. I&apos;m currently a graduate student at{" "}
            <Link href="https://www.pdx.edu/" legacyBehavior>
                <a
                    id={IDStyles.UniLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Portland State University
                </a>
            </Link>
            , where I’m building on the foundation I established during my
            undergraduate studies at the{" "}
            <Link href="https://www.pdx.edu/engineering/" legacyBehavior>
                <a
                    id={IDStyles.UniLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Maseeh College of Engineering and Computer Science
                </a>
            </Link>
            . There, I earned a Bachelor of Science in Computer Science and a
            minor in Mathematics.
            <div className="max-lg:hidden mt-4"> {<FriendsDescribe />}</div>
        </div>
    );
};

export default BioBegin;
