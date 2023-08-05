import hre from "hardhat";
import { Logger } from "tslog";
import logSettings from "../log_settings";
import { Contract, utils } from "ethers";

const log: Logger = new Logger(logSettings);

export class Deployer {

    public static async deployContract(contractName: string, args: any[] = [], confirmations: number = 3): Promise<Contract> {

        const accounts = await hre.ethers.getSigners();

        for (const account of accounts) {
            log.info(`Deploy with ${account.address} on ${hre.network.name}`);
        }
        log.info(`Deploy contract ${contractName} with args: ${args.join(", ")}`)
        const ContractDeployer = await hre.ethers.getContractFactory(contractName);
        const contract = await ContractDeployer.deploy(...args);
        const deployed = await contract.deployed()
        const receipt = await deployed.deployTransaction.wait(confirmations)

        let gasPrice = "0" //utils.formatEther(receipt.effectiveGasPrice)
        let gasUsed = "0" //utils.formatEther(receipt.gasUsed)
        let transactionFee = "0" //utils.formatEther(receipt.effectiveGasPrice.mul(receipt.gasUsed))

        try {
            gasPrice = utils.formatEther(receipt.effectiveGasPrice)
            gasUsed = utils.formatEther(receipt.gasUsed)
            transactionFee = utils.formatEther(receipt.effectiveGasPrice.mul(receipt.gasUsed))
        } catch (error) {
            log.error("can not get gas fee")
        }

        log.info(`Contract ${contractName} deployed at: ${contract.address}.\n - Gas Price: ${gasPrice}\n- Gas Used: ${gasUsed}\n- Transaction Fee: ${transactionFee}\n- Transaction hash: ${receipt.transactionHash}`)
        return deployed
    }

    public static async verifyContract(address: string, args: any[] = [], contractPath: string | undefined = undefined, loop: boolean = true, max: number = 3, delay: number = 1500) {
        let interval = 0;
        while (interval < max) {
            try {
                await hre.run("verify:verify", {
                    address,
                    constructorArguments: args,
                    contract: contractPath
                })
                interval = Number.MAX_VALUE - 2;
                await new Promise(f => setTimeout(f, delay));
            } catch (e) {
                log.error('error verify ' + e);
                interval += 1;
            }
            if (!loop) {
                interval = Number.MAX_VALUE - 2;
            }
        }

    }
}
