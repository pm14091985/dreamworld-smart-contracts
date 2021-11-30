require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
// require("@nomiclabs/hardhat-ganache");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545/",
      saveDeployments: true
    }
  },
  solidity: "0.5.16",
};
