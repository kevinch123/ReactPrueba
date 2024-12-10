import React from "react";

function Heart() {
  return (
    <div className="relative w-16 h-16">
      {/* Parte izquierda del corazón */}
      <div className="absolute top-0 left-4 w-8 h-8 bg-red-500 rounded-full transform -rotate-45"></div>
      {/* Parte derecha del corazón */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-red-500 rounded-full transform rotate-45"></div>
      {/* Base del corazón */}
      <div className="absolute top-4 left-0 w-16 h-16 bg-red-500 transform rotate-45 origin-top-left"></div>
    </div>
  );
}

export default Heart;
