const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ServiceFactory.json');
//'hungry antique plug collect grow neck keep orange violin deer depth surge'
const provider = new HDWalletProvider(
    'bubble asset sunny similar evidence essay purpose fury fog mystery million woman',
    'https://ropsten.infura.io/eZuEgdOZrMqOImH6ZyTE'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
    )
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();
