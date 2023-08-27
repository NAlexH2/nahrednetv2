import React from "react";
import { styles } from "styles";
import { NRNImage } from "components/ui/imageComponents";
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
      <div
        className="2xl:px-80 xl:px-44 lg:px-12 
      md:px-12 sm:px-10 max-sm:px-10"
      >
        <h2 className="2xl:-ml-5 xl:-ml-1 mt-5 mb-4">Past:</h2>
      </div>
      <div
        className="2xl:px-72 xl:px-40 lg:px-12 
      md:px-12 sm:px-10 max-sm:px-10"
      >
        <PastBio />
      </div>

      <div
        className="2xl:px-80 xl:px-44 lg:px-12 
      md:px-12 sm:px-10 max-sm:px-10"
      >
        <br />
        <h2 className="2xl:-ml-5 xl:-ml-1 mt-5 mb-4">Present:</h2>
      </div>
      <div
        className="2xl:px-72 xl:px-40 lg:px-12 
      md:px-12 sm:px-10 max-sm:px-10"
      >
        <PresentBio />
      </div>
    </div>
  );
};

export default Bio;
