import web3 from "./web3";
import MultiSigWallet from "./build/MultiSigWallet.json";

const instance = new web3.eth.Contract(
  JSON.parse(MultiSigWallet.interface),
  "0x21429e288e0ba214d97825195FeD1D1Fdb4B5678"
);

export default instance;
