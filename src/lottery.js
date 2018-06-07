import web3 from './web3';

const address = '0x36bFF748Afd23D94d5bA6Ab5d618E90d4Fdc2aD3';

const abi = [
  {"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],
  "payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],
  "name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,
  "stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,
  "stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players",
  "outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,
  "stateMutability":"nonpayable","type":"constructor"}];

  export default new web3.eth.Contract(abi, address);
