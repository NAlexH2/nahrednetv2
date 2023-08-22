import React from "react";
import { styles } from "styles";
import NRNImage from "components/ui/nrnImage";
import Headshot from "/public/images/hs2-small.jpg";

export const Bio = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="flex justify-center">
        <NRNImage
          id={styles.myface}
          className={`${styles.headshot}`}
          src={Headshot}
          alt="Alex Harris"
        />
        <h1 className={`${styles.bio} mx-16`}>Bio</h1>
      </div>
    </div>
  );
};

export default Bio;
