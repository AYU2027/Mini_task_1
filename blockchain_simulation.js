const crypto = require("crypto");

// firstly importing the module name crypto

class Block {   //creating the called block for giving the feature to block 
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() { // creating the function for calculating hash using sha256 algothirm
        return crypto.createHash("sha256")
            .update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce)
            .digest("hex");
    }
}

// creating the instance of the block class

let block1 = new Block(1, Date.now().toString(), { amount: 10 }, "0");
let block2 = new Block(2, Date.now().toString(), { amount: 20 }, block1.hash);
let block3 = new Block(3, Date.now().toString(), { amount: 30 }, block2.hash);

console.log("Block 1:", block1);
console.log("Block 2:", block2);
console.log("Block 3:", block3);

// enetring data in the block 1 unauanticly 
console.log("\n Block 1");
block1.data = { amount: 1000 };
block1.hash = block1.calculateHash();
/// the block 2 previous has doesn't match the block 1 hash so the all block are invalid 
console.log("Updated Block 1 Hash:", block1.hash);
console.log("Block 2 Previous Hash:", block2.previousHash);
console.log(" Now Block 2 is not valid  because its previousHash do not  match new Block 1 hash");
