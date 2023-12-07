# VaporWallet Smart Contracts

Welcome to the VaporWallet Smart Contracts repository. This repository contains the smart contracts used by VaporWallet, a blockchain-based wallet system designed for managing and interacting with digital assets in a secure and decentralized manner.

## Overview

VaporWallet is a suite of smart contracts designed to provide a comprehensive ecosystem for managing digital assets on the blockchain. Our contracts are designed to be efficient, secure, and user-friendly, catering to both novice and experienced users in the blockchain space.

## Summary

- **Quick Summary**: The VaporWallet Smart Contracts repository contains a set of contracts that facilitate various activities such as token management, quest claims, and future implementations for rewards and staking.
- **Version**: The current version of the VaporWallet Smart Contracts is 1.0.0.

### Solidity
- Solidity: ^0.8.0
- BNB Chain, 

## Features

### `VaporWalletActivities.sol` 
- Contract Address : [0xfeE4bac4100f788Dc8CDad62bb6b8a4187379556](https://bscscan.com/address/0xfeE4bac4100f788Dc8CDad62bb6b8a4187379556)
- Manages quest activities for users.
- Users can complete quests to earn rewards.
- Interacts with `VaporNFT.sol` to issue NFTs upon quest completion.

### `VaporQuestClaim.sol` 
- Contract Address : [0xA2F5b84ea9159A7d3b8E42d9fD2929cB41f64C79](https://bscscan.com/address/0xA2F5b84ea9159A7d3b8E42d9fD2929cB41f64C79)
- Allows users to claim NFT rewards upon completing quests.
- Verifies quest completion and interacts with `VaporNFT.sol` to mint NFTs.

### `VaporNFT.sol`
- Contract Address : [0x52A0c1da3D7a345F237D3f2B0127C7c78a217653](https://bscscan.com/address/0x52A0c1da3D7a345F237D3f2B0127C7c78a217653)
- ERC-721 contract for handling quest-related NFTs.
- Mints unique NFTs as rewards for completing quests in `VaporWalletActivities.sol`.

### `VaporToken.sol`
- Contract Address : [0x382CeFB55D3e06C1be985c599D55F0393Ee5e6a3](https://bscscan.com/address/0x382CeFB55D3e06C1be985c599D55F0393Ee5e6a3)
- ERC-20 token contract for VaporWallet's native token, VPR.
- Used for transactions within the VaporWallet ecosystem.

## Todo

Future developments and enhancements planned for the VaporWallet ecosystem include:

- **VaporPool (VPR Stake)**
  - A staking contract allowing users to stake VPR tokens.
  - Stakeholders earn rewards based on the amount and duration of their stake.

- **VaporPoolRewardClaim**
  - Contract to claim staking rewards from VaporPool.
  - Ensures fair and transparent distribution of rewards.

- **VaporPoolRewardRNG**
  - A random number generator to determine staking rewards.
  - Enhances the reward mechanism with an element of randomness.

## Contributing

We welcome contributions from developers and enthusiasts alike. If you're interested in contributing to the VaporWallet Smart Contracts, please read our [contribution guidelines](CONTRIBUTION.md).

## License

VaporWallet Smart Contracts are released under the [MIT License](LICENSE).

---

For more information, updates, and news, follow us on [Twitter](https://twitter.com/vaporwallet) or visit our [website](https://vaporwallet.co).

*This README is subject to updates and changes as our project evolves.*

---

*Disclaimer: This README is for informational purposes only and does not constitute financial, investment, or other advice.*

---
