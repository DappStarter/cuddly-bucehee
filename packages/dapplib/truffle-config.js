require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name raise stereo hole half clinic equal gather'; 
let testAccounts = [
"0x304dc1610a223401cc46d57c78ff5d5fdb51b1fce523407f70ae49827706eb79",
"0x8e41f42b8678c8322a27cf422c0a548b429b145d904cc6668234dd104a925bf6",
"0x7211da96f5683a30507a03cf29eeff084878d90c660e342a020012eb9415f5f8",
"0x08eaaee9ec29e67d739438d36ded536c9248aafaefa24243edf4c9651c2394a1",
"0x06b48c8532e98b1caedd6b0bdb866343068306476a4e13de57e97a8f92a7ef67",
"0x42c78b97c22a50719bba66e470fdcc91cc3960f601846d1d6c6677978b8d25f4",
"0x14c57c0a20ffb2a43528504060c92e38638f32239ce606937ca47866ae639da3",
"0xc5e7158ef6ab1d857a1aa8af27944bcfd3cd3a91088ddb3fe15499feb4087ace",
"0x0bec1343b13fe58dde13b2e03be891a8fdafe1bf3b434b5d07df13deb1d9c90e",
"0x6a3dc11c7e33d092468fcbef20cdb5d85fb308e609566c3a24e465d866d269b2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
