
const DaiToken = artifacts.require("DaiToken");
const MyDefiProject = artifacts.require("MyDefiProject");

module.exports = async function (deployer,network, accounts) {
    await deployer.deploy(DaiToken);
    const dai = await DaiToken.deployed();
    await deployer.deploy(MyDefiProject, dai.address);
    const myDefiProject= await MyDefiProject.deployed();
 
    await dai.faucet(myDefiProject.address, 100);
    await myDefiProject.foo(accounts[2,3], 100);
 
    const balance0 = await dai.balanceOf(myDefiProject.address);
    const balance1 = await dai.balanceOf(accounts[2,3]);

    console.log(balance0.toString());
    console.log(balance1.toString());
 };
