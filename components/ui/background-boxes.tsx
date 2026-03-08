"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const colors = [
  "rgb(125 211 252)",
  "rgb(249 168 212)",
  "rgb(134 239 172)",
  "rgb(253 224 71)",
  "rgb(252 165 165)",
  "rgb(216 180 254)",
  "rgb(147 197 253)",
  "rgb(165 180 252)",
  "rgb(196 181 253)",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function Box({ showPlus }: { showPlus: boolean }) {
  const [bgColor, setBgColor] = useState("transparent");
  const [fading, setFading] = useState(false);

  const handleEnter = () => {
    setFading(false);
    setBgColor(getRandomColor());
  };

  const handleLeave = () => {
    setFading(true);
    setTimeout(() => {
      setBgColor("transparent");
      setFading(false);
    }, 100);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        backgroundColor: bgColor,
        transition: fading ? "background-color 0.1s ease" : "background-color 0s",
      }}
      className="w-16 h-8 border-r border-t border-slate-700 relative"
    >
      {showPlus && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      )}
    </div>
  );
}

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div key={`row` + i} className="w-16 h-8 border-l border-slate-700 relative">
          {cols.map((_, j) => (
            <Box key={`col` + j} showPlus={j % 2 === 0 && i % 2 === 0} />
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
