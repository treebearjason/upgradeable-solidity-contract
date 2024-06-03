require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_KEY
    }
  }
};
