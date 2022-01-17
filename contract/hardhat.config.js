// https://eth-ropsten.alchemyapi.io/v2/LBuniSk3Sjg9tX3BIwVtxHVk1v0PeaGV

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/LBuniSk3Sjg9tX3BIwVtxHVk1v0PeaGV',
      accounts:['2e06e0c77e607e007c2727c7e18412138d054a0b82d4b78fc1f86fac1832458b']
    }
  }
}