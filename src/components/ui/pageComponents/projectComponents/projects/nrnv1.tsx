import { NRNImage } from "components/ui/imageComponents";
import HGCode from "/public/images/projectImages/HaskellGoSnippet.png";
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
        <p className="float-left mr-10">
          <div
            className="text-2xl underline decoration font-medium
              decoration-[var(--honey)]"
          >
            Tech Stack:
          </div>
          <ul className={`${ClassStyles.CustomList} float-left`}>
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
          <div className="flex justify-center">
            <NRNImage
              src={HGCode}
              className="p-5 max-h-96 w-auto"
              alt={`Code snippet from the phone bill manager project`}
            >
              <div className="text-center -mt-4 mb-4 text-xs">
                An interesting snippet found in GoCapture.hs
              </div>
            </NRNImage>
          </div>
          <h1 className="text-[var(--toastedalmond)]">
            Major Challenges and Their Solutions
          </h1>
          <h3
            className="text-[var(--toastedalmond)] underline
        decoration-[var(--honey)] ml-4 mt-1"
          >
            Capturing Units - CaptureGo.hs
          </h3>
        </div>
      </div>
    </AnimateTx>
  );
};

export default NRNV1;
