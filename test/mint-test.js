const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    const BinaryvilleRobotsNFT = await ethers.getContractFactory("BinaryvilleRobotsNFT");
    const robotNFT = await BinaryvilleRobotsNFT.deploy();
    await robotNFT.deployed();

    // Contracts are deployed using the first signer/account by default
    const [signer] = await ethers.getSigners();

    return { robotNFT, signer };
  }

  describe("MyNFT", function () {
    it("Should return the index of minted NFT", async function () {
      const { robotNFT, signer } = await loadFixture(deployFixture);
      
      const nftdata = await robotNFT.mintNFT(signer.address, 'ipgs://test-uri');
      console.log(nftdata);
      expect(await nftdata.value).to.equal(0);
    });
  });
});