"use client";

import React, { useEffect } from "react";
import Image from "../app/favicon.ico";


const Login:React.FC = () =>{
    
  return (
    <div className="h-screen bg-gradient-to-b from-cyan-600 to-teal-800 flex items-center justify-center">
      <main>
        <section className="py-5">
          <div className="text-center">
            <div className="size-56 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" id="User-1--Streamline-Guidance-Free.svg">
                <desc>User 1 Streamline Icon: https://streamlinehq.com</desc>
                <path stroke="#000000" d="M17.34375 18.9815625V15S15 13.59375 11.25 13.59375 5.15625 15 5.15625 15v3.9815625M1.40625 11.25C1.40625 5.8134375 5.8134375 1.40625 11.25 1.40625S21.09375 5.8134375 21.09375 11.25 16.6865625 21.09375 11.25 21.09375 1.40625 16.6865625 1.40625 11.25Zm9.774375000000001 0.46875S7.96875 10.0125 7.96875 7.5c0 -1.8121875 1.4709375 -3.28125 3.285 -3.28125A3.2765625000000003 3.2765625000000003 0 0 1 14.53125 7.5c0 2.5125 -3.211875 4.21875 -3.211875 4.21875h-0.13874999999999998Z" stroke-width="1.5"></path>
              </svg>
            </div>
  
            <h2 className="text-3xl font-black text-white">
              Hola Usuario!
            </h2>
            <p className="text-white">Bienvenido de nuevo</p>
          </div>
  
          <form className="bg-black text-white p-6 rounded-lg">
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Correo Electrónico" 
                name="email" 
                className="w-full p-2 bg-transparent border-b border-gray-400 placeholder-white text-white focus:outline-none" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                placeholder="Contraseña" 
                name="pass" 
                className="w-full p-2 bg-transparent border-b border-gray-400 placeholder-white text-white focus:outline-none" 
              />
            </div>
            <div>
              <input 
                type="submit" 
                value="Iniciar Sesión" 
                className="w-full p-2 bg-white text-black font-bold rounded-lg cursor-pointer" 
              />
            </div>
            <div className="mt-4 text-center">
              <a href="#" className="text-white">Olvidaste tu contraseña?</a>
              <p className="text-white mt-2">No estás registrado? <a href="#" className="text-white underline">Click aquí</a></p>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;