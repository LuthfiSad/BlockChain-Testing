import React, { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [blockNumber, setBlockNumber] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [transactionCount, setTransactionCount] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [networkType, setNetworkType] = useState("");
  const [peers, setPeers] = useState(0);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  useEffect(() => {
    if (selectedAccount) {
      loadAccountData(selectedAccount);
    }
  }, [selectedAccount]);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        const accounts = await web3.eth.getAccounts();
        console.log("Accounts:", accounts);
        setAccounts(accounts);
        setSelectedAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        console.log("Network ID:", networkId);
        setNetworkType(networkId);

        const peers = await web3.eth.net.getPeerCount();
        console.log("Peers Connected:", peers);
        setPeers(peers);

        const latestBlock = await web3.eth.getBlock("latest", true);
        console.log("Latest Block:", latestBlock);
        setBlockNumber(latestBlock.number);
        setTransactionCount(latestBlock.transactions.length);
        setTransactions(latestBlock.transactions);
      } catch (error) {
        console.error("Error loading blockchain data:", error);
      }
    } else {
      alert("Please install MetaMask to use this app.");
    }
  };

  const loadAccountData = async (account) => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    try {
      const balance = await web3.eth.getBalance(account);
      setBalance(web3.utils.fromWei(balance, "ether"));
    } catch (error) {
      console.error("Error loading account data:", error);
    }
  };

  const sendEther = async () => {
    if (!recipient || !amount) {
      alert("Please enter a recipient address and amount.");
      return;
    }

    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    try {
      const transaction = await web3.eth.sendTransaction({
        from: selectedAccount,
        to: recipient,
        value: web3.utils.toWei(amount, "ether"),
      });
      setTransactionHash(transaction.transactionHash);
      alert("Transaction Successful!");
      loadBlockchainData(); // Reload blockchain data to see new transaction
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed.");
    }
  };

  const mineBlock = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    try {
      // Mine a block
      await web3.currentProvider.send(
        { method: "evm_mine", params: [] },
        async (err, result) => {
          if (err) {
            console.error("Error mining block:", err);
            return;
          }
          console.log("Block mined:", result);
          
          // Reload to get updated block data after mining
          await loadBlockchainData();
        }
      );
    } catch (error) {
      console.error("Mining block failed:", error);
    }
  };

  return (
    <div className="App">
      <h1>Blockchain Explorer & DApp</h1>

      {/* Account selection */}
      <div>
        <h3>Select Account</h3>
        <select
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
        >
          {accounts.map((acc, index) => (
            <option key={index} value={acc}>
              {acc}
            </option>
          ))}
        </select>
      </div>

      <h3>Balance: {balance} ETH</h3>
      <h3>Network ID: {`${networkType}`}</h3>
      <h3>Peers Connected: {`${peers}`}</h3>

      {/* Display Latest Block Information */}
      <div>
        <h3>Latest Block Information</h3>
        <p>Block Number: {`${blockNumber}`}</p>
        <p>Transactions in Block: {transactionCount}</p>
      </div>

      {/* Display List of Transactions in Latest Block */}
      <div>
        <h3>Transactions in Latest Block</h3>
        <ul>
          {transactions.map((tx, index) => (
            <li key={index}>
              <p>From: {tx.from}</p>
              <p>To: {tx.to}</p>
              <p>Value: {Web3.utils.fromWei(tx.value, "ether")} ETH</p>
              <p>Gas: {tx.gas}</p>
              <p>Transaction Hash: {tx.hash}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Ether Transfer Section */}
      <div>
        <h3>Send Ether</h3>
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount in Ether"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={sendEther}>Send Ether</button>

        {transactionHash && (
          <div>
            <h4>Transaction Hash</h4>
            <p>{transactionHash}</p>
          </div>
        )}
      </div>

      {/* Block Mining Section */}
      <div>
        <h3>Mine a Block (Testnet/Ganache)</h3>
        <button onClick={mineBlock}>Mine Block</button>
      </div>
    </div>
  );
}

export default App;
