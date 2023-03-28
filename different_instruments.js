let collectionNFT = [];

function mintNFT(brand, type, color, price) {
  const instruments = {
    brand: brand,
    type: type,
    color: color,
    price: price,
  }
  collectionNFT.push(instruments);
}

function listNFTs() {
  for(let i = 0; i < collectionNFT.length; i++){
    console.log(collectionNFT[i]);
  }
}

function getTotalSupply () {
  console.log("Total NFT:" + collectionNFT.length);
}

mintNFT("Yamaha", "Piano", "Black", 120000);
mintNFT("RJ", "Acoustic Guitar", "Beige", 5999);
mintNFT("GTX", "Drumset", "Dark Blue", 12000);

listNFTs();

getTotalSupply();
