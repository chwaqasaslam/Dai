// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract DaiToken is ERC20 {
    constructor () public ERC20 ('Mock Dai Token' , 'DAI'){

    }

    function faucet(address recipient, uint256 amount) external{

        _mint(recipient, amount);
        
    }
}