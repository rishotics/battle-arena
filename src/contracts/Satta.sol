// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Satta is ERC20 {
    constructor() ERC20("Satta", "SATTA") {
        _mint(msg.sender, 1e9*(10**decimals()));
    }
}