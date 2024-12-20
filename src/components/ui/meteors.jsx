"use client";;
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -8,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (<>
    {[...meteorStyles].map((style, idx) => (
      // Meteor Head
      (<span
        key={idx}
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-pink-500 shadow-[0_0_0_1px_#ffffff10]"
        )}
        style={style}>
        {/* Meteor Tail */}
        <div
          className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-pink-500 to-transparent" />
      </span>)
    ))}
  </>);
};
Meteors.propTypes = {
  number: PropTypes.number,
};

export default Meteors;
