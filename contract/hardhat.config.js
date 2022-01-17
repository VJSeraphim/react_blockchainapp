// https://eth-ropsten.alchemyapi.io/v2/LBuniSk3Sjg9tX3BIwVtxHVk1v0PeaGV

require('@nomiclabs/hardhat-waffle')

module.exports = (
  solidity:'0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/LBuniSk3Sjg9tX3BIwVtxHVk1v0PeaGV',
      accounts:['']
    }
  }
)