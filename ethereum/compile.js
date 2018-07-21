const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const tokenPath = path.resolve(__dirname, 'contracts', 'ElevaToken_flat.sol');
const crowdsalePath = path.resolve(__dirname, 'contracts', 'ElevaCrowdsale_flat.sol');
const walletPath = path.resolve(__dirname, 'contracts', 'MultiSigWallet.sol');

const source = fs.readFileSync(tokenPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}

const source1 = fs.readFileSync(crowdsalePath, 'utf8');
const output1 = solc.compile(source1, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output1) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output1[contract]
    );
}

const source2 = fs.readFileSync(walletPath, 'utf8');
const output2 = solc.compile(source2, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output2) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output2[contract]
    );
}