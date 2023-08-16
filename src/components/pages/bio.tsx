import React from "react";
import { styles } from "styles";

const headshot: string = "images/hs2-small.jpg";
export const Bio = () => {
  return (
    <div className={`${styles.container}`}>
      <div>
        <img
          id="myface"
          className={styles.headshot}
          src={headshot}
          alt="Alex Harris"
        />
      </div>
      <div>
        <h1 className={styles.mynav}>Bio</h1>
      </div>
    </div>
  );
};

export default Bio;
