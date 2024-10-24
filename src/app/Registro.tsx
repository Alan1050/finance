"use client";

import React, { useState } from "react";
import { Guardar } from "../../srcBlocDatosPersona/registro";

const Login:React.FC = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:3000/Registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    });
  
    const result = await response.json();
    console.log(result);
  };
  
  return (
    <div className="h-screen bg-gradient-to-b from-cyan-600 to-teal-800 flex items-center justify-center">
      <main>
        <section className="py-5">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white">
              Hola Usuario!
            </h2>
            <p className="text-white">Bienvenido de nuevo</p>
          </div>

          <form className="bg-black text-white p-6 rounded-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Correo Electrónico" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Guardar el valor del correo electrónico
                className="w-full p-2 bg-transparent border-b border-gray-400 placeholder-white text-white focus:outline-none" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                placeholder="Contraseña" 
                name="pass" 
                value={pass}
                onChange={(e) => setPass(e.target.value)} // Guardar el valor de la contraseña
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
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;