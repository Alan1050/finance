"use client";

import React, { useEffect } from "react";
import Login from "./Login"


const App: React.FC = () => {
  return (
    <>
      <form action="../app/php/RegistroBD.php" method="post" className="bg-black p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="Email" className="block text-white font-bold mb-2">Email</label>
          <input 
            type="text" 
            placeholder="Email" 
            id="Email" 
            className="w-full p-2 bg-black border border-gray-500 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-teal-500"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="Contraseña" className="block text-white font-bold mb-2">Contraseña</label>
          <input 
            type="text" 
            placeholder="Contraseña" 
            id="Contraseña" 
            className="w-full p-2 bg-black border border-gray-500 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-teal-500"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="Simbolo" className="block text-white font-bold mb-2">Símbolo</label>
          <input 
            type="text" 
            placeholder="Símbolo" 
            id="Simbolo" 
            className="w-full p-2 bg-black border border-gray-500 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-teal-500"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="Token" className="block text-white font-bold mb-2">Tokens</label>
          <input 
            type="number" 
            placeholder="Tokens" 
            id="Token" 
            className="w-full p-2 bg-black border border-gray-500 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-teal-500"
          />
        </div>
  
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-white">Acepto los términos y condiciones</label>
        </div>
  
        <input 
          type="submit" 
          value="Enviar Transferencia" 
          className="w-full bg-white text-black p-2 rounded-lg cursor-pointer hover:bg-gray-300"
        />
      </form>
    </>
  );
};

export default App;
