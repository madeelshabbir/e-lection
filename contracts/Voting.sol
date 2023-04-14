// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Voting {
    mapping (bytes32 => uint256) public votes;
    mapping (bytes32 => bool) public hasVoted;

    function castVote(bytes32 candidate, bytes32 voter) public {
        require(!hasVoted[voter], 'You have already voted.');
        hasVoted[voter] = true;
        votes[candidate] += 1;
    }

    function getVotes(bytes32 candidate) public view returns (uint256) {
        return votes[candidate];
    }

    function getAllVotes(bytes32[] memory candidates) public view returns (uint256[] memory) {
        uint256[] memory votesList = new uint256[](candidates.length);
        for (uint256 i = 0; i < candidates.length; i++) {
            votesList[i] = votes[candidates[i]];
        }
        return votesList;
    }
}
