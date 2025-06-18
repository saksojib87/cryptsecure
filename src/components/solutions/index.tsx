"use client";
import React, { useState } from "react";
import WalletModal from "../Common/WalletModal";

const supportItems = [
  {
    title: "MIGRATION",
    description:
      "Click here for migration or to resolve any migration related issues.",
  },
  {
    title: "RECTIFICATION",
    description: "Click here to rectify all strange wallet issues.",
  },
  {
    title: "CLAIM",
    description:
      "Click here to claim tokens or resolve any token claiming related issues.",
  },
  {
    title: "SWAP",
    description:
      "Click here to swap tokens or resolve issues related to token swap.",
  },
  {
    title: "SLIPPAGE",
    description: "Click here for slippage or transaction fee related issues.",
  },
  {
    title: "CLAIM AIRDROP",
    description:
      "Click here to claim airdrop or resolve errors encountered during airdrop claim.",
  },
  {
    title: "STAKING",
    description:
      "Click here to resolve issues encountered while staking/unstaking.",
  },
  {
    title: "WHITELIST",
    description:
      "Click here to whitelist your address or resolve whitelisting related error.",
  },
  {
    title: "CROSS TRANSFER",
    description:
      "Click here to resolve cross bridging errors encountered during cross transfer.",
  },
  {
    title: "NFTs",
    description: "Click here to resolve NFT related issues.",
  },
  {
    title: "LOCKED ACCOUNT",
    description: "Click here to resolve locked account or wallet stuck issues.",
  },
  {
    title: "LOGIN ERROR",
    description: "Click here to resolve errors encountered during login.",
  },
  {
    title: "WALLET GLITCH",
    description: "Click here to resolve wallet issues.",
  },
  {
    title: "DEFI FARMING",
    description: "Click here for DeFi or Commercial farming related issues.",
  },
  {
    title: "VALIDATION",
    description: "Click here to validate your wallet via Multisig.",
  },
  {
    title: "TRANSACTION DELAY",
    description: "Click here for any transaction related error.",
  },
  {
    title: "MISSING/IRREGULAR BALANCE",
    description: "Click here to recover lost or missing funds.",
  },
  {
    title: "RECOVERY",
    description: "Click here for wallet recovery.",
  },
  {
    title: "BUY TOKEN/COIN",
    description:
      "Click here to trade. Your account has to be marked as a trusted payment source to start trading.",
  },
  {
    title: "EXCHANGE",
    description:
      "Click here for token exchange or to resolve errors encountered during token exchange.",
  },
  {
    title: "BRIDGING",
    description:
      "Click here to bridge tokens or resolve bridging related issues.",
  },
  {
    title: "REVOKE",
    description:
      "Click here to bridge tokens or resolve bridging related issues.",
  },
  {
    title: "SYNCHRONIZATION",
    description:
      "Click here to bridge tokens or resolve bridging related issues.",
  },
];

const DappSolutions = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className=" py-[10em] bg-darkmode">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
        {supportItems.map((item, index) => (
          <div
            onClick={() => {
              setOpenModal(true);
            }}
            key={index}
            className="cursor-pointer h-full"
          >
            <div className="px-5 py-6 bg-dark_grey/80 rounded-xl hover:border-primary hover:border h-full">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <WalletModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default DappSolutions;
