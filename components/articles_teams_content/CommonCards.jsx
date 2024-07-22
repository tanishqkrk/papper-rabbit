import React from "react";
import Image from "next/image";
import image from "../../public/assets/articalimgs/artical1.jpg";

function CommonCard({ isImage }) {
  return (
    <div className="w-full relative">
      {isImage ? (
        <Image className="w-full rounded-[20px]" src={image} alt="image1" />
      ) : (
        <div className="w-full h-full text-xs relative flex items-center justify-center bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est suscipit
          accusamus, quae adipisci quidem veritatis.
        </div>
      )}
    </div>
  );
}

export default CommonCard;
