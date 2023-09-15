import { NRNButton } from "../nrnButtons";
import { NRNImage } from "../imageComponents";
import GitHub from "images/github.svg";
import Link from "next/link";
export const GitHubButton = () => {
  return (
    <div>
      <Link href="https://github.com/NAlexH2" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <NRNImage
            className="w-14"
            src={GitHub}
            alt="A Button with the LinkedIn logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default GitHubButton;
