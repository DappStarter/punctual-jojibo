require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember evil heavy enrich orange gate'; 
let testAccounts = [
"0x25d3c859f2a0f25dd7d39a4b77f2f41bda928da7903523877ae2053fb3f1dba7",
"0x32f1a4d56ca6da2582f6b1909d22802e4817b34bda2c1280f16f1310348d1a80",
"0xe785b3b37c283425cbc14ec7f2f6c2460f3a69ea98f7396db6292659f4b0f803",
"0x1c8d59e891de5894a5abcaa2b3a1013f0274c9cf6134f0a3ec132673a46b66b9",
"0x49f930acb0be187b7c46e20a7531c31d944880d40f84003ce041585278958cda",
"0x7df450fd2f2ffcf958de244b0a9c044b0ff9bc78d8e8e703d38f765943041792",
"0xbea478fe0800cc215aff30fedac3a08228ba788c6670d1d602892d0a258b7cdf",
"0x55e271fb466d0be2cccbf271ddace455f439fc9cb261212f074c32291f547ada",
"0x4b4deb836c634df579477669d3196026246ddb9980ead46de2b7082ed54a2e6e",
"0xebe4ad028f260f92bfe42bc7487872925f901399cbefdfcc4eb4eebaf99f09d8"
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
