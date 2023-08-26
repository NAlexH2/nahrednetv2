import React from "react";
import { styles } from "styles";
import NRNImage from "components/ui/nrnImage";
import Headshot from "/public/images/hs2-small.jpg";
import {
  BioBegin,
  FriendsDescribe,
  PastBio,
  PresentBio,
} from "components/ui/bioElements";

const Bio = () => {
  return (
    <div>
      <div className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
        <div className="justify-center max-md:flex">
          <NRNImage
            className={`${styles.headshot} max-h-80 w-auto`}
            src={Headshot}
            alt="Alex Harris"
          />
        </div>
        <text className="flex justify-center md:ml-10">
          <BioBegin />
        </text>
      </div>
      <text className="flex justify-center max-md:px-10">
        <text
          className="max-w-xl md:max-w-5xl text-justify 
        lg:hidden md:mx-12 mb-4"
        >
          {<FriendsDescribe />}
        </text>
      </text>
      <div className="md:flex justify-start md:mx-12 mb-7 max-md:px-10">
        <h2>Past:</h2>

        <text className="flex justify-center md:ml-10">{<PastBio />}</text>
      </div>
    </div>
  );
};

export default Bio;
