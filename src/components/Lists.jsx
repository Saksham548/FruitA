import React from "react";


const Lists = ({ id, title, description}) => {

  return (

    <div className="rounded-lg bg-[#EAEFEBCC] px-10 py-6 m-3">
      <div className="flex flex-col">
        <div className="my-2 text-2xl md:text-xl">{title}</div>
        <div className="my-2 text-lg md:text-sm">{description}</div>
      
      </div>
    </div>
  );
};

export default Lists;
