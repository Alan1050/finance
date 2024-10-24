export class Block {
    height: number;
    data: string;
    time: string;
    previousBlockHash: string | null;
    hash: string;
  
    constructor({ data }: { data: string }) {
      this.height = 0;
      this.data = data;
      this.time = '';
      this.previousBlockHash = null;
      this.hash = '';
    }
  
    async validate(): Promise<boolean> {
      // Aquí iría tu lógica de validación
      return true;
    }
  
    toString(): string {
      return `Block - Height: ${this.height}, Data: ${this.data}`;
    }
  }