import React from "react";
import image from "../../public/assets/articalimgs/artical1.jpg";
import Image from "next/image";

function CommonCards() {
  return (
    <div className="w-full">
      <Image className="w-full rounded-[20px]" src={image} alt="image1" />
    </div>
  );
}

export default CommonCards;
