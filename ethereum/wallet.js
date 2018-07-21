import web3 from "./web3";
import MultiSigWallet from "./build/MultiSigWallet.json";

const instance = new web3.eth.Contract(
  JSON.parse(MultiSigWallet.interface),
  "0xEdEE9C33c8FbBf83E9F87480a26c8cd8e45f496a"
);

export default instance;
