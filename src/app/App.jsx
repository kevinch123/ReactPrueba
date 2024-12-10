import { Link, Route, Routes } from 'react-router-dom'; // Importa Route y Routes
import SecondScreen from './components/second'; // Importa SecondScreen
import RainEffect from './components/rainEffect'; // Importa el componente RainEffect

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 relative">
      {/* Efecto de lluvia en la pantalla principal */}
      <RainEffect />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center h-screen">
              {/* Botón que lleva a la segunda pantalla */}
              <Link to="/segundaPantalla">
                <button className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
                  ¡Haz clic aquí lindota mia!
                </button>
              </Link>
            </div>
          }
        />

        {/* Segunda pantalla */}
        <Route path="/segundaPantalla" element={<SecondScreen />} />
      </Routes>
    </div>
  );
}

export default App;