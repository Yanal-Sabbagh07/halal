import React, { useEffect } from "react";
const Clock = (props) => {
  useEffect(() => {
    const interval = setInterval(() => props.setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="clock-container">
      <p className={`clock `}>
        {props.value.getHours() > 9
          ? props.value.getHours()
          : `0${props.value.getHours()}`}
        :
        {props.value.getMinutes() < 10
          ? `0${props.value.getMinutes()}`
          : props.value.getMinutes()}
        :
        {props.value.getSeconds() < 10
          ? `0${props.value.getSeconds()}`
          : props.value.getSeconds()}
      </p>
    </div>
  );
};

export default Clock;
