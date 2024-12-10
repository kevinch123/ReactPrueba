import React, { useEffect, useState } from 'react';

import '../../assets/styles/index.css'; // Asegúrate de crear este archivo CSS

// Definir un tipo para las gotas de lluvia
interface Raindrop {
    left: number; // La propiedad 'left' debe ser un número
  }
  
  function RainEffect() {
    const [raindrops, setRaindrops] = useState<Raindrop[]>([]); // Usar el tipo Raindrop para el estado
    const numberOfRaindrops = 100; // Número de gotas a generar
  
    useEffect(() => {
      const drops: Raindrop[] = []; // Definir que 'drops' es un array de Raindrop
      for (let i = 0; i < numberOfRaindrops; i++) {
        // Generar posición horizontal aleatoria (de 0% a 100%)
        const left = Math.random() * 100; // Aleatorio entre 0 y 100
        drops.push({ left });
      }
      setRaindrops(drops);
    }, []);
  
    return (
      <div className="rain-container">
        {raindrops.map((drop, index) => (
          <div
            key={index}
            className="raindrop"
            style={{
              left: `${drop.left}%`, // Posición horizontal aleatoria
              animationDelay: `calc(-0.7s * ${index})`, // Retraso de la animación para variabilidad
            }}
          />
        ))}
      </div>
    );
  }
  
  export default RainEffect;