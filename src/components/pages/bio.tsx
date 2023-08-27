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
    <div className="container mx-auto">
      <div>
        <div className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
          <div className="justify-center max-md:flex">
            <NRNImage
              className={`${styles.headshot} max-h-80 w-auto max-md:mb-7`}
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
      </div>
      <span
        className="2xl:pl-80 xl:pl-44 lg:pl-12 
      md:pl-12 sm:pl-10 max-sm:pl-10"
      >
        <h2 className="2xl:-ml-5">Past:</h2>
      </span>
      <br className="mb-2.5" />
      <span
        className="2xl:pl-80 xl:pl-44 lg:pl-12 
      md:pl-12 sm:pl-10 max-sm:pl-10"
      >
        <text className="2xl:-ml-5 mt-5">
          <PastBio />
        </text>
      </span>
    </div>
  );
};

export default Bio;
