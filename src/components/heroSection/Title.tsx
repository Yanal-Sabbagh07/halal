import React from "react";

const Title = () => {
  return (
    <div className="md-h-96 flex h-40 w-full items-center justify-center sm:h-48 lg:justify-start ">
      <div
        className=" flex items-center justify-center text-center text-2xl font-bold uppercase 
        italic  leading-relaxed text-gray-300 sm:text-4xl sm:leading-relaxed md:h-full md:text-4xl
        md:leading-loose  lg:ml-14 lg:w-3/4 lg:text-left lg:text-5xl lg:font-black lg:leading-relaxed lg:tracking-wide lg:text-gray-800
        "
      >
        <p>
          <span className="text-green-600">Read!</span> in the name of your lord
          who has created
        </p>
      </div>
    </div>
  );
};

export default Title;
