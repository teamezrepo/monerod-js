# NodeJS RPC Client for Monero Daemon

Monerod-js is a NodeJS RPC Client for Monero Daemon. 

The official Monero Daemon RPC documentation can be found [here](https://getmonero.org/knowledge-base/developer-guides/daemon-rpc).

Developed for / Last tested with Monerod v0.10.3.1.

This repository is a fork of https://github.com/cryptoshrimpi/monerod-js.

## Install
```
npm install monerod-js
```

## Test
You need to install the dev dependencies to run the test suite:

```
cd node_modules/monerod-js
npm install
npm test
```

The test's default daemon is `localhost:18081`. Some tests may fail if your daemon is configured to restrict access to certain RPC calls.

## Usage

### Example

```javascript
const { MoneroDaemon } = require("monerod-js");

var monerod = new MoneroDaemon();

monerod.getBlockCount().then((result) => {
    console.log("Block count: " + result.count);
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
```

Run the example code: 
```
cd node_modules/monerod-js
node example.js
```

### Available methods

```
getBlockCount()

onGetBlockHash(blockHeight: number)

getBlockTemplate(walletAddress: string, reserveSize: number)

getLastBlockHeader()

getBlockHeaderByHash(hash: string)

getBlockHeaderByHeight(height: number)

getBlock(height: number, hash: string)

getConnections()

getInfo()

getHardFork()

setBans(bans: BansList)

getBans()

getHeight()

getTransactions(txsHashes: string[], decodeAsJson: boolean)

sendRawTransaction(txAsHex: string)

getTransactionPool()

submitBlock(blockBlobData: string)

getVersion()

getFeeEstimate()
```

## Beer
Tip cryptoshrimpi, the original developer, a beer.

Monero: ```4ATwquCmjnUTuDcF2Yce4YMLexuyFMKF96W7gEA6QU8S5pffgFDi9i29R8yyvHq1MzBVNVXZXUuEtdqpgVRC2hTc7Vtuahu```

## License
MIT. See [LICENSE.md](LICENSE.md).
