import Web3 from 'web3';

// Crear una instancia de Web3
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Si MetaMask está disponible, utilizar su proveedor
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: "eth_requestAccounts" });
} else {
  console.log("Instala MetaMask para interactuar con la blockchain.");
}

export const Guardar = async (email, pass) => {
  const cripto = {
    simbolo: "BTC",
    total: "total"
  };

  const transactionData = `Simbolo: ${cripto.simbolo} Total: ${cripto.total} Email: ${email} Pass: ${pass}`;
  
  try {
    const accounts = await web3.eth.getAccounts(); // Obtener cuenta del usuario (de MetaMask)
    const sender = accounts[0];

    // Enviar transacción a la red Ethereum (guarda datos en la blockchain)
    await web3.eth.sendTransaction({
      from: sender,
      to: sender, // Para este ejemplo, enviamos los datos a nosotros mismos (puedes configurar a otra dirección)
      data: web3.utils.asciiToHex(transactionData), // Los datos que quieres guardar
      value: '0x0', // Sin enviar Ether en esta transacción
    });

    console.log("Datos guardados en la blockchain descentralizada de Ethereum");
  } catch (error) {
    console.error("Error guardando en la blockchain:", error);
  }
};