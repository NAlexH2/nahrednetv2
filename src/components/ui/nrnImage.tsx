import React from "react";
import Image, { StaticImageData } from "next/image";

interface nrnImageProps {
  src: string | StaticImageData;
  className?: string;
  id?: string;
  alt: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const NRNImage = (prop: nrnImageProps) => {
  return (
    <Image
      className={prop.className}
      id={prop.id}
      onClick={prop.onClick}
      style={{ color: "inherit" }}
      src={prop.src}
      alt={prop.alt}
    />
  );
};

export default NRNImage;
