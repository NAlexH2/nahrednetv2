import React from "react";
import { styles } from "styles";
import NRNImage from "components/ui/nrnImage";
import Greeting from "components/ui/systemTimeGreeting";
import Headshot from "/public/images/hs2-small.jpg";

const Bio = () => {
  return (
    <div className="flex justify-center">
      <div className="md:flex justify-center md:ml-7 md:mr-12 md:mb-8">
        {/* <span className="sm:columns-5 xl:mr-16 h-auto"></span> */}

        <div className="justify-center max-md:flex md:mr-5 max-md:mx-10">
          <NRNImage
            className={`${styles.headshot} max-h-72 w-auto`}
            src={Headshot}
            alt="Alex Harris"
          />
        </div>
        <div className="">
          <div className={`${styles.about}`}>
            <Greeting />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            eligendi, sequi, neque fuga consectetur alias inventore deserunt
            ullam distinctio rerum maxime. Illo non odit sint temporibus porro
            laudantium iusto quae! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat at id facilis fugit ut labore. Ex
            accusamus cupiditate dignissimos quasi quam qui adipisci eum?
            Voluptatum tempora sint voluptatem est hic?
          </div>
        </div>
        {/* <span className="xl:columns-5 xl:ml-16"></span> */}
      </div>
    </div>
  );
};

export default Bio;
