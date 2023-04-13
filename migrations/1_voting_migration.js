const VotingContract = artifacts.require('Voting');

module.exports = async (deployer) => {
  await deployer.deploy(VotingContract);
};
