import { Deployer } from "./helper";
import hre from "hardhat";

async function main() {

    const weth = await Deployer.deployContract("WETH9", [])

    await Deployer.verifyContract(weth.address, [])

    console.log("weth:", weth.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });