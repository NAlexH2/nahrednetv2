import React from "react";
import { styles } from "styles";
import NRNImage from "components/ui/nrnImage";
import Greeting from "components/ui/systemTimeGreeting";
import Headshot from "/public/images/hs2-small.jpg";

const Bio = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="flex">
        <NRNImage
          id={styles.myface}
          className={`${styles.headshot}`}
          src={Headshot}
          alt="Alex Harris"
        />

        <div className={`${styles.bio} mx-16`}>
          <Greeting />
          Bio
        </div>
      </div>
    </div>
  );
};

export default Bio;
