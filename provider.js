const { Transaction } = require('ethereumjs-tx');
const ethUtil = require('ethereumjs-util');
const { createWallet } = require('./wallet');

class MiniProvider {
    constructor(privateKey) {
        this.privateKey = Buffer.from(privateKey, 'hex');
        this.address = ethUtil.bufferToHex(ethUtil.privateToAddress(this.privateKey));
    }

    /**
     * Signs a transaction object.
     * @param {Object} txParams { nonce, gasPrice, gasLimit, to, value, data }
     */
    async signTransaction(txParams) {
        const tx = new Transaction(txParams, { chain: 'mainnet' });
        tx.sign(this.privateKey);
        
        const serializedTx = tx.serialize();
        return '0x' + serializedTx.toString('hex');
    }

    getAddress() {
        return this.address;
    }
}

// Example usage context
const wallet = createWallet();
const provider = new MiniProvider(wallet.privateKey);
console.log('Provider initialized for:', provider.getAddress());

module.exports = MiniProvider;
