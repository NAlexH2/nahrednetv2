import { NRNImage } from "components/ui/imageComponents";
import HGCode from "/public/images/projectImages/HaskellGoSnippet.png";
import Link from "next/link";
import { IDStyles, ClassStyles } from "styles";
import CodeBlock from "react-code-blocks/dist/components/CodeBlock";

export const HaskellGo = () => {
  return (
    <div className="my-8 mx-5">
      <div className="text-center">
        <Link
          href="https://github.com/NAlexH2/HaskellGo"
          passHref={true}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl italic underline 
            decoration-[var(--honey)] font-semibold"
          id={IDStyles.UniLink}
        >
          HaskellGo
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
          <li className="mt-1 ml-5">Haskell</li>
          <li className="mt-1 ml-5">Haskell Language Server</li>
          <li className="mt-1 ml-5">GHC</li>
          <li className="mt-1 ml-5">Cabal</li>
        </ul>
      </p>
      <div className="text-justify">
        <p>
          The game of &#34;Go&#34; is ancient and the first instances of the
          game being played goes back around 4,000 years ago in China. It has
          stood the test of time and is still enjoyed by many people world wide.
          This repository is an attempt to re-create the game using Haskell as
          the language of choice while utilizing{" "}
          <Link
            href="https://docs.haskellstack.org/en/stable/"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
            id={IDStyles.UniLink}
          >
            The Haskell Tool Stack.
          </Link>
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
        <h1 className="text-white underline decoration-[var(--honey)]">
          Major Challenges and Their Solutions
        </h1>
        <h3
          className="text-white underline
        decoration-[var(--honey)] ml-4 mt-1"
        >
          Capturing Units - CaptureGo.hs
        </h3>
        <p className="mt-3 mx-4">
          Firstly, let me explain some vocabulary you will see coming up.
          <ul className={ClassStyles.CustomList}>
            <li className="mt-2 mx-7">
              <b className="text-white underline decoration-[var(--honey)]">
                Unit:
              </b>{" "}
              A collection of stones of the same color where their cardinal
              intersections (north, south, east, west) connect.
            </li>
            <li className="mt-1 mx-7">
              <b className="text-white underline decoration-[var(--honey)]">
                Liberties:
              </b>{" "}
              The cardinal positions of a stone that are currently <i>empty</i>.
              This means that no stone has yet to be placed next to another
              stone, regardless of the color.
            </li>
          </ul>
        </p>
        <p className="mt-3 mx-4">
          This was the task that took me the longest to figure out. I could not
          manage to find a way for a period of time on what solution would work
          best. At a certain point I ran into the issue of having 3-5 functions
          attempting to tackle this issue. I took step back and re-examined the
          issue. Each &#34;stone&#34; in a unit must lose all its liberties to
          be considered captured.
        </p>
        <p className="mt-3 mx-4">
          Once I realized all I had to do was examine each stone to check its
          liberties and then check all the other stones in that unit for the
          same instance of losing all their liberties. From there, the code
          returned True or False for each stone - True if it lost all its
          liberties, False if any of its liberties were not occupied - if any
          were False, then the unit had not been captured, if all were True then
          the unit had been captured.
        </p>
      </div>
    </div>
  );
};

export default HaskellGo;
