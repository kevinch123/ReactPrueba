import React from "react";

function SecondScreen() {
  return (
    <section>
      <div className="flex h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        {/* Contenedor izquierdo */}
        <div className="w-1/4 bg-white p-6 space-y-4">
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Botón 1
          </button>
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Botón 2
          </button>
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Botón 3
          </button>
        </div>

        {/* Contenedor derecho */}
        <div className="flex-1 flex items-center justify-center p-8">
          <h1 className="text-4xl font-bold text-white">¡Bienvenido a la segunda pantalla!</h1>
        </div>
      </div>
    </section>
  );
}

export default SecondScreen;
