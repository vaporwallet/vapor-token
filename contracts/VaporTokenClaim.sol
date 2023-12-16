// SPDX-License-Identifier: ISC

pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract VaporTokenClaim is Ownable, ReentrancyGuard {
    mapping(address => bool) public firstClaimed;
    mapping(address => bool) public secondClaimed;
    mapping(address => uint256) public amountToClaim;

    IERC20 public vpr;

    // Time period for the first claim unlock (in seconds)
    uint256 public constant FIRST_CLAIM_UNLOCK = 34467643; // 34467643

    // Time period for the second claim unlock (in seconds)
    uint256 public constant SECOND_CLAIM_UNLOCK = 35389243; // ((32*24*60*60)/3) + 34344738;

    event Claim(address indexed account, uint256 amount);

    constructor(IERC20 _vpr) {
        vpr = _vpr;
    }

    function setup(
        address[] calldata accounts,
        uint256[] calldata amounts
    ) external onlyOwner {
        require(accounts.length == amounts.length, "Invalid input length");
        for (uint256 i = 0; i < accounts.length; i++) {
            amountToClaim[accounts[i]] = amounts[i];
        }
    }

    // Claim 50% of the tokens after the first claim unlock period
    function firstClaim() external nonReentrant {
        require(!firstClaimed[msg.sender], "Already claimed");
        require(block.number >= FIRST_CLAIM_UNLOCK, "Not unlocked yet");
        uint256 amount = amountToClaim[msg.sender];
        require(amount > 0, "No amount to claim");

        vpr.transfer(msg.sender, amount / 2);

        firstClaimed[msg.sender] = true;
        emit Claim(msg.sender, amount);
    }

    // Claim 50% of the tokens after the second claim unlock period
    function secondClaim() external nonReentrant {
        require(firstClaimed[msg.sender], "First claim not done");
        require(!secondClaimed[msg.sender], "Already claimed");
        require(block.number >= SECOND_CLAIM_UNLOCK, "Not unlocked yet");
        uint256 amount = amountToClaim[msg.sender];
        require(amount > 0, "No amount to claim");

        vpr.transfer(msg.sender, amount / 2);

        secondClaimed[msg.sender] = true;
        emit Claim(msg.sender, amount);
    }

    // Emergency function to withdraw all remaining tokens in case of issues
    function emergencyWithdraw() external onlyOwner {
        vpr.transfer(msg.sender, vpr.balanceOf(address(this)));
    }
}
