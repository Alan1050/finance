import SHA256 from "crypto-js/sha256.js";
import { Block } from "./block";

export class Blockchain {
  chain: Block[];
  height: number;

  constructor() {
    this.chain = [];
    this.height = -1;
    this.initializeChain();
  }

  async initializeChain() {
    if (this.height === -1) {
      const block = new Block({ data: "Genesis Block" });
      await this.addBlock(block);
    }
  }

  addBlock(block: Block): Promise<Block> {
    return new Promise(async (resolve, reject) => {
      block.height = this.chain.length;
      block.time = new Date().getTime().toString();

      if (this.chain.length > 0) {
        block.previousBlockHash = this.chain[this.chain.length - 1].hash;
      }

      const errors = await this.validateChain();
      if (errors.length > 0) {
        reject(new Error("The chain is not valid: " + errors));
        return;
      }

      block.hash = SHA256(JSON.stringify(block)).toString();
      this.chain.push(block);
      resolve(block);
    });
  }

  validateChain(): Promise<Error[]> {
    const errors: Error[] = [];

    return new Promise(async (resolve) => {
      for (const block of this.chain) {
        const isValid = await block.validate();
        if (!isValid) {
          errors.push(new Error(`The block ${block.height} is not valid`));
        }
      }
      resolve(errors);
    });
  }

  print() {
    for (const block of this.chain) {
      console.log(block.toString());
    }
  }
}