// migrations/2_deploy_contracts.js

// const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = async function (deployer) {
  await deployer.deploy(ComplexStorage);
}