"use client";
import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { useTime } from "day-time-greet";
function Draw() {
  const { time } = useTime();
  return (
    <div className="h-screen w-full bg-white">
      {/* <h1 className="text-4xl text-black">{time}</h1> */}
      <Excalidraw />
    </div>
  );
}

export default Draw;
