import React from "react";
import { styles } from "styles";
import NRNImage from "components/ui/nrnImage";
import Greeting from "components/ui/systemTimeGreeting";
import Headshot from "/public/images/hs2-small.jpg";

const Bio = () => {
  return (
    <div className="flex justify-center m-12">
      <span className="columns-5 ml-16"></span>

      <div className=" h-auto w-auto">
        <NRNImage
          className={`${styles.headshot} object-scale-down`}
          src={Headshot}
          alt="Alex Harris"
        />
      </div>

      <div className={`${styles.about}`}>
        <Greeting />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi,
        sequi, neque fuga consectetur alias inventore deserunt ullam distinctio
        rerum maxime. Illo non odit sint temporibus porro laudantium iusto quae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at id
        facilis fugit ut labore. Ex accusamus cupiditate dignissimos quasi quam
        qui adipisci eum? Voluptatum tempora sint voluptatem est hic?
      </div>
      <span className="mr-16"></span>
    </div>
  );
};

export default Bio;
