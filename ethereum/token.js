import web3 from "./web3";
import ElevaToken from "./build/ElevaToken.json";

const instance = new web3.eth.Contract(
  JSON.parse(ElevaToken.interface),
  "0x01981ca4b06e57953074f85F04e9eB50BC0f9BdA"
);

export default instance;
