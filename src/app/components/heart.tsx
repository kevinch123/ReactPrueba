import React from "react";

function Heart() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Emoji de corazón grande con animación */}
      <div className="relative text-[15rem]"> {/* Tamaño ajustado a 15rem */}
        <span
          className="opacity-0 animate-draw-heart"
          style={{
            animation: "draw-heart 2s ease-in-out forwards",
          }}
        >
          ❤️
        </span>
      </div>
    </div>
  );
}

export default Heart;
