// contracts/SimpleStorage.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleStorage {
  uint256 public storedData;

  constructor() {
    storedData = 0;
  }

  function set(uint256 num) public {
    storedData = num;
  }

  function get() public view returns (uint256) {
    return storedData;
  }
}