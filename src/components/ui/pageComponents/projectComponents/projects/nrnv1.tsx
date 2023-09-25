import { NRNImage } from "components/ui/imageComponents";
import GreetingV1 from "/public/images/projectImages/nrnGreetingV1.png";
import Link from "next/link";
import { IDStyles, ClassStyles } from "styles";
import AnimateTx from "components/utils/animateTx";

export const NRNV1 = () => {
  return (
    <AnimateTx>
      <div className="my-8 mx-5">
        <div className="text-center">
          <Link
            href="https://github.com/NAlexH2/nahrednet/tree/HTML-Complete"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl italic underline 
            decoration-[var(--honey)] font-semibold"
            id={IDStyles.UniLink}
          >
            nah-red.net v1
          </Link>
        </div>
        <br />
        <p className="float-left mr-10 mb-2">
          <div
            className="text-2xl underline decoration font-medium
              decoration-[var(--honey)]"
          >
            Tech Stack:
          </div>
          <ul className={`${ClassStyles.CustomList}`}>
            <li className="mt-1 ml-5">HTML & CSS</li>
            <li className="mt-1 ml-5">JavaScript</li>
            <li className="mt-1 ml-5">Bootstrap</li>
          </ul>
        </p>
        <div className="text-justify">
          <p>
            This is a final project for CS410 Introduction to Web Development at
            Portland State University. Being the introduction class, we were
            given opportunities throughout the term to practice different
            practices withing web development. This involved recreating pages
            with raw HTML and CSS - no fancy frameworks!
          </p>
          <div className="max-md:flex max-md:justify-center md:float-right">
            <NRNImage
              src={GreetingV1}
              className="p-5 max-h-96 w-auto"
              alt={`Snippet of JavaScript code showing 
              off the greeting message on the bio page`}
            >
              <div className="text-center -mt-4 mb-4 text-xs">
                JavaScript of the greeting seen at the top of the bio page
              </div>
            </NRNImage>
          </div>
        </div>
      </div>
    </AnimateTx>
  );
};

export default NRNV1;
