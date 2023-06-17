import React from "react";

const Title = () => {
  return (
    <div className="w-full h-40 sm:h-48 md-h-96 flex items-center justify-center lg:justify-start ">
      <div
        className=" text-2xl sm:text-4xl leading-relaxed md:text-4xl md:h-full text-stone-200 text-center 
        uppercase  lg:text-left lg:ml-14 lg:w-3/4 lg:text-gray-900 lg:text-5xl lg:leading-relaxed
        font-bold  italic flex items-center justify-center sm:leading-relaxed md:leading-loose lg:font-bold lg:tracking-wide
        "
      >
        <p>
          <span className="text-green-500">Read!</span> in the name of your lord
          who has created
        </p>
      </div>
    </div>
  );
};

export default Title;
