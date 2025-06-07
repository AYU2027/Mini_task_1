# Mini_task_1
task of Blockchain internship 

## Theoretical Part

1. Blockchain Basics
 A.  Define blockchain in your own words (100–150 words).

   Ans --Blockchain is a decentralized digital ledger that records transactions in a secure, transparent, and tamper-proof manner. Instead of being stored in a single location, data is distributed across a network of computers (nodes), where each participant has a copy of the full ledger. Transactions are grouped into blocks, and each block is linked to the previous one using cryptographic hashes, forming a chain — hence the name "blockchain". Once added to the chain, data cannot be changed without altering all subsequent blocks, which is computationally impractical. This makes blockchain highly secure and trustworthy for storing information. The technology eliminates the need for a central authority, allowing for peer-to-peer trust and verification, which is ideal for finance, supply chains, identity management, and more.

B.List 2 real-life use cases 
  (i) it is very useful in healthcare sector for maintaining the patient records
  (ii) it also very useful in the Real estate sector 


2.Block Anatomy
 A.Draw a block showing: data, previous hash, timestamp, nonce, and Merkle root.
|     Block                   |
Previous Hash :	Ety3yr4gg4u2gjr
| Timestamp    : 	2025-06-07 08:30:00
| Nonce	        :5276381
|Merkle Root	     :Yeghr2rjjh
              Data 
AB : 2BTC

  B.Briefly explain with an example how the Merkle root helps verify data integrity.
              The Merkle root is a single hash that represents all transactions in a block. It helps verify data integrity efficiently, without storing or                         comparing every  transaction individually.


  3.Consensus Conceptualization
     A.Explain in brief (4–5 sentences each):


           (i)  What is Proof of Work and why does it require energy?

              Proof of Work is a consensus algorithm where miners compete to solve complex cryptographic puzzles to add a block to the blockchain. The first one to               solve it gets to add the block and earns a reward. This process requires heavy computational effort and electricity, which makes it expensive to                    attack the network. The energy-intensive nature of PoW helps secure the blockchain by making tampering costly and inefficient.


           (ii) What is Proof of Stake and how does it differ?
             Proof of Stake replaces miners with validators who are chosen based on the number of coins they “stake” or lock up as collateral. The more coins you                hold, the higher your chances of validating the next block. It is much more energy-efficient than PoW, as it doesn't involve solving complex puzzles.               Validators are incentivized to behave honestly or risk losing their staked assets


            (iii)What is Delegated Proof of Stake and how are validators selected?
              In DPoS, stakeholders vote to elect a small number of delegates or validators who are responsible for validating transactions and creating new                      blocks. These representatives take turns to produce blocks on behalf of the network. The voting system keeps validators accountable, as malicious or                underperforming ones can be voted out. DPoS offers faster consensus and scalability compared to PoW and PoS




