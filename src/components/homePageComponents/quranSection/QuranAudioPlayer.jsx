import React, { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
const QuranAudioPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  // const [width, setWidth] = useState(100);
  const audioRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioRef.current.duration);
    if (seconds && !isNaN(seconds)) {
      props.setAudioDuration(seconds);
    }
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState]);

  const handlePlay = () => {
    const preValue = isPlaying;
    setIsPlaying(!preValue);
    if (!preValue) {
      audioRef.current.play();
      // props.setAudioDuration(duration);
    } else {
      audioRef.current.pause();
      props.setAutomatic(false);
    }
  };
  return (
    <div className="mb-2 flex h-16  w-[95%] items-center justify-between gap-2 rounded-full border-4 border-white pl-2  pr-2  md:w-[80%]">
      <audio
        src={props.src}
        // controls
        ref={audioRef}
        // onLoadedMetadata={onLoadedMetadata}
        // onPlay={handleOnPlay}
        // onEnded={handleEnded}
        // onPlaying={handlePlaying}
        // onPause={() => props.setAutomatic(false)}
        autoPlay
        // onLoadedMetadata={onLoadedMetadata}
        // className="w-full"
        preload="metadata"
      />
      <button onClick={handlePlay} className="">
        {isPlaying ? (
          <PauseIcon className="rounded-full bg-white p-1 text-[42px] text-red-500" />
        ) : (
          <PlayArrowIcon className=" rounded-full bg-white p-1 text-[42px] text-green-500" />
        )}
      </button>

      {/* current time  */}

      <div className="text-white">0:00</div>

      {/* progerss bar */}

      <input
        type="range"
        className="transparent relative h-4 w-full appearance-none rounded-lg border-transparent bg-neutral-200
        outline-none"
        // id="default-range"
        // onChange={changeWidth}
        // min={1}
        // max={800}
        // step={1}
        // value={width}
      />
      {/* Duration */}
      <div className="text-white">2:49</div>
    </div>
  );
};

export default QuranAudioPlayer;

// const onLoadedMetadata = () => {
//   if (audioRef.current) {
//     props.setAudioDuration(Math.floor(audioRef.current.duration) * 1000);
//   } else {
//     props.setAudioDuration(10000);
//   }
// };
// const handleEnded = () => {
//   props.setAutomatic(true);
//   // setAudioDuration(audioRef.current.duration);
// };
// const handleOnPlay = () => {
//   props.setAudioDuration(audioRef.current.duration);
//   props.setAutomatic(true);
// };
// const handlePlaying = () => {
//   if (props.audioDuration && !isNaN(props.audioDuration)) {
//     props.setAudioDuration(
//       Math.floor(audioRef.current.duration - audioRef.current.currentTime) *
//         1000
//     );
//     props.setAutomatic(true);
//   } else props.setAutomatic(false);
// };
// const changeWidth = (event) => {
//   setWidth(event.target.value);
// };
