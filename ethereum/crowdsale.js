import web3 from "./web3";
import Crowdsale from "./build/ElevaCrowdsale.json";

const instance = new web3.eth.Contract(
  JSON.parse(Crowdsale.interface),
  "0xC5eDf8f83158bdf5487A15841EC200183044C5D1"
);

export default instance;
