"use client";

import React, { useEffect } from "react";
import Image from "../app/favicon.ico";
import { Blockchain } from "../../srcBloc/blockchain";
import { Block } from "../../srcBloc/block";

const App: React.FC = () => {
  useEffect(() => {
     const runBlockchain = async () => {
      const blockchain = new Blockchain();

      const block1 = new Block({ data: "Block #1" });
      await blockchain.addBlock(block1);

      const block2 = new Block({ data: "Block #2" });
      await blockchain.addBlock(block2);

      const block3 = new Block({ data: "Block #3" });
      await blockchain.addBlock(block3);

      blockchain.print();
    };

    runBlockchain();
  }, []);

  return (
    <div>
    <header>
        <div>
          <div><img src="{Image || null}" alt="" /></div>
          <div>
            <h2>Hola <span>Usuario</span></h2>
            <p>Bienvenido de nuevo</p>
          </div>
        </div>
        <div>
          <input type="text"  placeholder="Buscar"/>
          <button>Aceptar</button>
        </div>
        <div>
          <button>Inicio</button>
          <button>Menu</button>
          <button>Usuario</button>
        </div>
    </header>
  <div>Check the console for blockchain details</div>
  </div>
);
};

export default App;