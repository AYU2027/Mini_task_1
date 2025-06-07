function simulatePoW() { /// this function used for proof of work 
    const miner1 = { name: "Aman", power: Math.floor(Math.random() * 100) };
    const miner2 = { name: "Rahul", power: Math.floor(Math.random() * 100) };
    const winner = miner1.power > miner2.power ? miner1 : miner2;
    console.log(" Proof of Work Winner:", winner.name, `(power: ${winner.power})`);
    console.log(" Selected due to highest computational power.\n");
}

function simulatePoS() {  // this function is used for proof of stack
    const staker1 = { name: "Aman", stake: Math.floor(Math.random() * 100) };
    const staker2 = { name: "Rahul", stake: Math.floor(Math.random() * 100) };
    const winner = staker1.stake > staker2.stake ? staker1 : staker2;
    console.log(" Proof of Stake Winner:", winner.name, `(stake: ${winner.stake})`);
    console.log(" Selected due to highest token stake.\n");
}

function simulateDPoS() { // this function is used for the delgated proof of work --
// // which run on the voting of the node to fid most trusted validator
    const candidates = ["Aman", "Aman", "Rahul"];
    const votes = [1, 1, 2]; // 3 voters, 2 vote for Grace
    const voteCount = {};

    for (let vote of votes) {
        const candidate = candidates[vote];
        voteCount[candidate] = (voteCount[candidate] || 0) + 1;
    }

    const maxVotes = Math.max(...Object.values(voteCount));
    const topCandidates = Object.keys(voteCount).filter(name => voteCount[name] === maxVotes);
    const selected = topCandidates[Math.floor(Math.random() * topCandidates.length)];

    console.log(" DPoS Winner:", selected);
    console.log(" Selected randomly among top voted delegates.\n");
}

console.log("Simulating Consensus Mechanisms \n");
simulatePoW();
simulatePoS();
simulateDPoS();
