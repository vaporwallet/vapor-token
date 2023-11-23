import "tsconfig-paths/register";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "dotenv/config";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import { removeConsoleLog } from "hardhat-preprocessor";
import "hardhat-spdx-license-identifier";
import "solidity-coverage";
import "@nomicfoundation/hardhat-ledger";

// https://ethereum.stackexchange.com/questions/140444/how-to-generate-thousands-of-wallets-out-of-a-mnemonic-phrase
const mnemonicTest =
  "radar blur cabbage chef fix engine embark joy scheme fiction master release";
const bscTestAccounts = process.env.DEPLOYER_PRIVATE_KEY
  ? [process.env.DEPLOYER_PRIVATE_KEY]
  : [];

const ledgerAccounts = [process.env.LEDGER_DEPLOYER_ADDRESS];
module.exports = {
  networks: {
    bscTest: {
      // url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      url: "https://bsc-testnet.publicnode.com",
      saveDeployments: true,
      tags: ["bscTest"],
      // 35 gwei = 35000000000
      // 1000 gwei = 1000000000000
      // gasPrice: 1000000000000,
      accounts: bscTestAccounts,
      // ledgerAccounts,
    },
    bsc: {
      url: "https://bsc-dataseed1.bnbchain.org",
      saveDeployments: true,
      tags: ["bsc"],
      // accounts,
      ledgerAccounts,
    },
    hardhat: {
      // accounts,
      // accounts: {
      //   mnemonic: mnemonicTest,
      //   path: "m/44'/60'/0'/0",
      //   initialIndex: 0,
      //   count: 10,
      //   passphrase: "",
      // },
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.14",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
    ],
  },
  mocha: {
    timeout: 180e3,
  },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  preprocess: {
    eachLine: removeConsoleLog(
      (hre) =>
        hre.network.name !== "hardhat" && hre.network.name !== "localhost"
    ),
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
