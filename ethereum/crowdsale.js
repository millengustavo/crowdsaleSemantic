import web3 from "./web3";
import Crowdsale from "./build/ElevaCrowdsale.json";

const instance = new web3.eth.Contract(
  JSON.parse(Crowdsale.interface),
  "0xe1f21f85F10fDB1626f07A8738c8bb12162d4Fca"
);

export default instance;
