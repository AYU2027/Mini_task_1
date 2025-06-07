const crypto = require("crypto");

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.timestamp = Date.now().toString();
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash("sha256")
            .update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce)
            .digest("hex");
    }

    mineBlock(difficulty) { /// creating the function for the minning algothirm  with starttime 
        const startTime = Date.now();
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        const endTime = Date.now();
        console.log(` Block mined: ${this.hash}`);
        console.log(` Attempts: ${this.nonce}`);
        console.log(` Time taken: ${(endTime - startTime) / 1000} seconds`);
    }
}

let block = new Block(1, { amount: 50 }, "0");
console.log(" Mining block...");
block.mineBlock(4); // now the mining algothirm with input 4 
