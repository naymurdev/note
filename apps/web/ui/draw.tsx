"use client";
import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
function Draw() {
  return (
    <div className="h-full">
      <Tldraw />
    </div>
  );
}

export default Draw;
