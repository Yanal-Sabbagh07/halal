import React from "react";

const AzahnPlayer = () => {
  return (
    <div className="flex h-20 w-full items-start justify-center ">
      <audio controls src="/audio/Azahn.mp3" style={{ width: "87%" }}></audio>
    </div>
  );
};

export default AzahnPlayer;
