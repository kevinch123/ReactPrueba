
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx'; // Asegúrate de que la ruta del archivo sea correcta
import './assets/styles/index.css';

// Renderiza la aplicación en el elemento con id 'root' del DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>
  
  
);
