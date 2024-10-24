"use client";

import React, { useEffect } from "react";
import { Blockchain } from "../srcBlocDatosPersona/blockchain";
import { Block } from "../srcBlocDatosPersona/block";

function Guardado() {
    useEffect(() => {
        const runBlockchain = async () => {
            var cripto = {
                "simbolo": "BTC",
                "total": "total"
            };
    
          const blockchain = new Blockchain();
    
          const block = new Block({ data: `Simbolo: ${cripto.simbolo} Total: ${cripto.total}` });
          await blockchain.addBlock(block);
    
          blockchain.print();
        };
    
        runBlockchain();
      }, []);    
}
