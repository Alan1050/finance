import WebSocket from 'ws';
import { Blockchain } from './blockchain';
import { Block } from './block';

const P2P_PORT = process.env.P2P_PORT ? parseInt(process.env.P2P_PORT) : 6001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

export class P2PServer {
  blockchain: Blockchain;
  sockets: WebSocket[];

  constructor(blockchain: Blockchain) {
    this.blockchain = blockchain;
    this.sockets = [];
  }

  listen() {
    const server = new WebSocket.Server({ port: P2P_PORT });
    server.on('connection', (socket: WebSocket) => this.connectSocket(socket));

    this.connectToPeers();

    console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
  }

  connectToPeers() {
    peers.forEach((peer: string) => {
      const socket = new WebSocket(peer);
      socket.on('open', () => this.connectSocket(socket));
    });
  }

  connectSocket(socket: WebSocket) {
    this.sockets.push(socket);
    console.log('Socket connected');

    this.messageHandler(socket);
    this.sendChain(socket);  // Enviar la cadena completa cuando se conecte un nuevo nodo
  }

  messageHandler(socket: WebSocket) {
    socket.on('message', (message: string) => {
      const data = JSON.parse(message);

      switch (data.type) {
        case 'CHAIN':
          this.handleChainResponse(data.chain);
          break;
        case 'BLOCK':
          this.handleBlockReceived(data.block);
          break;
      }
    });
  }

  sendChain(socket: WebSocket) {
    socket.send(JSON.stringify({ type: 'CHAIN', chain: this.blockchain.chain }));
  }

  broadcastBlock(block: Block) {
    this.sockets.forEach(socket =>
      socket.send(JSON.stringify({ type: 'BLOCK', block }))
    );
  }

  handleChainResponse(chain: Block[]) {
    if (chain.length > this.blockchain.chain.length) {
      console.log('Received chain is longer, replacing current chain...');
      this.blockchain.chain = chain;
    }
  }

  handleBlockReceived(block: Block) {
    const lastBlock = this.blockchain.chain[this.blockchain.chain.length - 1];
  
    if (block.previousBlockHash === lastBlock.hash) {
      this.blockchain.addBlock(block).then(() => {
        console.log('Block added to chain.');
        // Imprimir la cadena actual del nodo
        this.blockchain.print();
      });
    } else {
      console.log('Received block not valid, requesting full chain...');
      this.broadcastChain();
    }
  }

  broadcastChain() {
    this.sockets.forEach(socket => this.sendChain(socket));
  }
}