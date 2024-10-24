import { Blockchain } from './blockchain';
import { P2PServer } from './p2p';

// Crear una nueva blockchain
const blockchain = new Blockchain();

// Iniciar el servidor P2P
const p2pServer = new P2PServer(blockchain);
p2pServer.listen();