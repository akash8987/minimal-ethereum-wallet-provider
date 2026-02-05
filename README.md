# Minimal Ethereum Wallet Provider

This repository contains a high-quality, flat-structured implementation of an Ethereum wallet provider. It is designed for developers who need to understand how transaction signing and provider objects work under the hood without the bloat of massive libraries.

## Features
- **Key Management**: Securely handle private keys and public addresses.
- **Transaction Signing**: Sign raw Ethereum transactions using ECDSA.
- **Web3 Compatible**: Follows basic provider patterns used by Metamask and Ethers.js.
- **Zero Subfolders**: All logic is contained within the root directory for easy browsing.

## Core Logic
The provider uses the Elliptic Curve Digital Signature Algorithm (ECDSA) to ensure security. 

The relationship between the private key and public key is defined by the secp256k1 curve:
$$Q = d \times G$$

Where:
- $d$ is the private key (a random integer).
- $G$ is the generator point of the curve.
- $Q$ is the resulting public key point.

## License
MIT
