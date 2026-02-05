const ethUtil = require('ethereumjs-util');
const elliptic = require('elliptic');
const ec = new elliptic.ec('secp256k1');

/**
 * Generates a new Ethereum-compatible wallet.
 * @returns {Object} { privateKey, address }
 */
function createWallet() {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate().toString('hex');
    
    const pubKey = keyPair.getPublic('array');
    const addressBuffer = ethUtil.pubToAddress(Buffer.from(pubKey.slice(1)));
    const address = ethUtil.bufferToHex(addressBuffer);

    return {
        privateKey: privateKey,
        address: address
    };
}

module.exports = { createWallet };
