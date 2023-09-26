import { NRNImage } from "components/ui/imageComponents";
import TernaryStyle from "/public/images/projectImages/nrnV2TernaryStyle.png";
import AnimateTx from "components/utils/animateTx";
import Link from "next/link";
import { Code, dracula } from "react-code-blocks";
import { IDStyles, ClassStyles } from "styles";

export const NRNV2 = () => {
  return (
    <AnimateTx>
      <div className="my-8 mx-5">
        <div className="text-center">
          <Link
            href="https://github.com/NAlexH2/nahrednet/tree/NextJS-Complete"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl italic underline 
            decoration-[var(--honey)] font-semibold"
            id={IDStyles.UniLink}
          >
            nah-red.net v2
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
            <li className="mt-1 ml-5">npm</li>
            <li className="mt-1 ml-5">
              <Link href="https://bun.sh/" id={IDStyles.UniLink}>
                Bun
              </Link>
            </li>
            <li className="mt-1 ml-5">NextJS/React</li>
            <li className="mt-1 ml-5">HTML & CSS</li>
            <li className="mt-1 ml-5">TypeScript</li>
            <li className="mt-1 ml-5">Material UI</li>
            <li className="mt-1 ml-5">Tailwind CSS</li>
            <li className="mt-1 ml-5">Framer Motion</li>
            <li className="mt-1 ml-5">react-code-blocks</li>
          </ul>
        </p>
        <div className="text-justify">
          <p className="mt-3">
            This is the website you are currently looking at! Having a desire to
            learn new material over the Summer in 2023, I set out to recreate my
            website, but using some incredibly powerful tools this time. NextJS,
            TypeScript, Material UI, Tailwind CSS, Framer Motion and{" "}
            {
              <Code
                // @ts-ignore
                language="TypeScript"
                text="react-code-blocks"
                theme={dracula}
              />
            }{" "}
            made it possible to design something I could be proud of, and learn
            an incredible amount of information from.{" "}
            <p className="mt-3">
              With custom components, to CSS overriding AND
              customization/extending, and out of the box ready components, this
              stack allowed me to learn far more than I had expected to. I went
              into this personal project expecting it to be a lot of placing
              components and customizing them the way I wanted them to be, but
              that turned into recreating and building my own components to
              behave <i>exactly how I wanted them to</i>.
            </p>
          </p>
          <h3
            className="text-[var(--toastedalmond)] underline
        decoration-[var(--honey)] mt-3"
          >
            Why NextJS?
          </h3>
          <p className="mt-1">
            In my pursuit for deciding what framework I wanted to go with, I had
            in fact setup both a NextJS app (with JavaScript) and React app
            (TypeScript). I started building out with NextJS in JavaScript but
            was getting frustrated with small concerns - specifically how the
            routing works, client side rendering and server side render as well
            as which one happens per page, and that TypeScript just had superior
            features. I also wanted to create a single page that would
            transition when being navigated around, and thought that React would
            be best for that.
          </p>
          <p className="mt-1">
            I quickly found myself stuck in a corner with React though! I could
            not find a clean and easy way to do some things - such as adding
            custom fonts - in a nice manner. NextJS however, made it super easy
            to do that! Then, I was running into issues where certain packages I
            was trying to use were, strangely enough, having issues being
            compatible. I had thought to myself how strange that was and that it
            should not matter.
          </p>
          <div className="flex justify-center">
            <NRNImage
              src={TernaryStyle}
              className="p-5 max-h-[280px] w-auto"
              alt={`Snippet of TypeScript code showing demonstrating a ternary 
              picking a CSS style`}
            >
              <div className="text-center -mt-4 mb-3 text-xs">
                A cool snippet from V2 that has a ternary select the CSS style
              </div>
            </NRNImage>
          </div>
          <p className="mt-1">
            Issue after issue kept coming up, and I found myself disappointed
            that I was not able to resolve the issues I was getting into. I did
            a bit more research, more reading, and found that NextJS supports
            TypeScript! And that the router and CSR vs SSR actually was not
            going to be a problem for my little site since I had nothing that
            requested information from a database.
          </p>
          <h3
            className="text-[var(--toastedalmond)] underline 
            decoration-[var(--honey)] mt-3"
          >
            What is Bun?
          </h3>
          <p className="mt-3">
            <Link href="https://bun.sh/" id={IDStyles.UniLink}>
              Bun
            </Link>{" "}
            is a JavaScript runtime that is compatible with npm, and was
            something I had actually discovered towards the end of the project.
            I had only found it because of some searches I was doing on YouTube
            recommended the{" "}
            {
              <Link
                href="https://www.youtube.com/watch?v=BsnCpESUEqM"
                id={IDStyles.UniLink}
              >
                Bun 1.0 launch video
              </Link>
            }{" "}
            which convinced me to give it a shot. I moved my dev environment
            over to Windows Subsystem for Linux, installed Bun, and the
            experience was a night and day difference.
          </p>
          <p className="mt-3">
            Everything promised in the Bun launch video was true! My package
            install times (when starting completely fresh - no node_modules
            folder) went from ~30 seconds, to less than 3. Downloading packages
            were significantly faster too.{" "}
            {
              <Code
                // @ts-ignore
                language="TypeScript"
                text="bun run dev"
                theme={dracula}
              />
            }{" "}
            nearly instantly launches the NextJS dev environment, which was a
            significant difference from what I had experienced before.
          </p>
          <h3
            className="text-[var(--toastedalmond)] underline 
            decoration-[var(--honey)] mt-3"
          >
            On Tailwind CSS
          </h3>
          <p className="mt-3">
            Now I am quite new to web development, but Tailwind CSS is a dream
            framework. It made 99% of the work I had to do with CSS incredibly
            simple. From adding my own extended grid options to use with it, to
            being able to do something like{" "}
            {
              <Code
                // @ts-ignore
                language="TypeScript"
                text="max-h-[280px]"
                theme={dracula}
              />
            }{" "}
            where I am setting my own pixel width instead of being constrained
            to their built in options was amazing! This extends to <i>almost</i>{" "}
            any CSS property too. Here is another pretty cool example:
          </p>
          <div className="text-center my-2">
            <Code
              // @ts-ignore
              language="TypeScript"
              text="text-[var(--toastedalmond)] underline decoration-[var(--honey)]"
              theme={dracula}
              wrapLongLines
            />
          </div>
          <p className="mt-1">
            This is the{" "}
            {
              <Code
                // @ts-ignore
                language="TypeScript"
                text="className"
                theme={dracula}
              />
            }{" "}
            on the header for this section! I was able to tell the CSS to use my
            own personally selected global color variables, and it just works.
            No fancy extra steps, and I had actually discovered this by chance
            after learning you could do the pixel example I showed earlier on.
          </p>
          <h3
            className="text-[var(--toastedalmond)] underline 
            decoration-[var(--honey)] mt-3"
          >
            Where Was Material UI Used?
          </h3>
          <p className="mt-3">
            Every page actually. At the top of this page are customized Tabs
            from the base offering Material UI provides. The navigation bar is a
            heavily modified set of Material UI buttons (called NavButton), this
            goes for my name too. On the &#34;Experience&#34; page, the
            accordion is heavily modified. The Skills container uses Material
            UI&#39;s &#34;List Item&#34; component, again heavily modified.
          </p>
          <h3
            className="text-[var(--toastedalmond)] underline 
            decoration-[var(--honey)] mt-3"
          >
            Where Is This Deployed?
          </h3>
          <p className="mt-3">
            Using a modified build script, the website is built and deployed
            from AWS Amplify. AWS Amplify can automatically rebuild a website if
            it detects any changes to the source, much like GitHub actions can
            too. I also used GitHub pages and GitHub actions to do test
            deployments just to ensure it looked fine periodically.
          </p>
          <h3
            className="text-[var(--toastedalmond)] underline 
            decoration-[var(--honey)] mt-3"
          >
            How Long Did This Take?
          </h3>
          <p className="mt-3">
            Taking breaks over the summer, I would say that if I had been
            working on it every single day and had to estimate days/weeks I
            spent on this, I would say maybe 4 weeks in total. Mind you, this is
            discovering many mistakes, making corrections, and have to study and
            learn many new tools and how they work. I&#39;m very proud of what I
            have accomplished.
          </p>
        </div>
      </div>
    </AnimateTx>
  );
};

export default NRNV2;
