import { NRNImage } from "components/ui/imageComponents";
import GreetingV1 from "/public/images/projectImages/nrnGreetingV1.png";
import Link from "next/link";
import { IDStyles, ClassStyles } from "styles";
import AnimateTx from "components/utils/animateTx";

const projURL = "https://github.com/NAlexH2/nahrednetv1";
export const NRNV1 = () => {
  return (
    <AnimateTx>
      <div className="my-8 mx-5">
        <div className="text-center">
          <Link
            href={projURL}
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
        <p className="float-left mr-10 mb-4">
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
          <p className="mt-3">
            This was a final project for CS410 Introduction to Web Development
            at Portland State University. Being the introduction class, we were
            given opportunities throughout the term to practice by doing various
            assignments. This involved recreating pages with raw HTML and CSS -
            no fancy frameworks!
          </p>
          <div className="max-md:flex max-md:justify-center md:float-right">
            <NRNImage
              src={GreetingV1}
              className="p-5 max-h-[280px] w-auto"
              alt={`Snippet of JavaScript code showing 
              off the greeting message on the bio page`}
            >
              <div className="text-center -mt-4 mb-1 text-xs">
                JavaScript of the greeting seen at the top of the bio page
              </div>
            </NRNImage>
          </div>
          <p className="mt-3">
            With this project I not only learned how to setup a multi-page
            website and implement some JS, I also got to experience a full cycle
            of making something entirely new in web development. This allowed me
            to learn how to use Bootstrap, and it was not the first time we as a
            class had dived into Bootstrap, but it was the first time I got to
            go all in with it.
          </p>
          <p className="mt-3">
            Bootstrap allowed me to put together some really incredible and
            creative components that I was quite worried about when starting.
            From creating accordions, to cards and setting up a grid to make
            placement of elements easier, Bootstrap streamlined the experience I
            was having and accelerated my learning. The greatest thing I
            rediscovered/relearned while working on the project was recalling
            overriding CSS properties that may already exist, enabling me to
            make super custom elements I was proud of that did <i>exactly</i>{" "}
            what I wanted with ease.
          </p>
        </div>
      </div>
    </AnimateTx>
  );
};

export default NRNV1;
