import Link from "next/link";
import { NRNImage } from "../imageComponents";
import LinkedIn from "/public/images/linkedin.svg";
export const LinkedInButton = () => {
  return (
    <div>
      <Link href="https://www.linkedin.com/in/nalexh2/" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <NRNImage
            className="w-14"
            src={LinkedIn}
            alt="A Button with the LinkedIn logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default LinkedInButton;
