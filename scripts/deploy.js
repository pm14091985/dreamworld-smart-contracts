async function main() {
  // We get the contract to deploy
  const DWDToken = await ethers.getContractFactory("DWDToken");
	console.log('Deploying DWDToken...');
  const dwd = await DWDToken.deploy();

  console.log("DWD deployed to:", dwd.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });