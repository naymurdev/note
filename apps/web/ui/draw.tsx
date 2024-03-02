"use client";
import React from "react";
// import { Tldraw } from "tldraw";
// import "tldraw/tldraw.css";
import { useTime } from "day-time-greet";
function Draw() {
  const { time } = useTime();
  return (
    <div className="h-screen w-full bg-white">
      {/* <Tldraw /> */}

      <h1 className="text-4xl text-black">{time}</h1>
    </div>
  );
}

export default Draw;
