import AnimateTx from "components/utils/animateTx";
import React from "react";
import { ClassStyles } from "styles";

export const Contact = () => {
  return (
    <AnimateTx>
      <div className="container mx-auto">
        <div className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
          <h1 className={ClassStyles.MyNav}>Contact page</h1>
        </div>
      </div>
    </AnimateTx>
  );
};

export default Contact;
