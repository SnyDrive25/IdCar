import { ethers } from "ethers";
import { useState } from "react";

function Client() {

    const [clientConnected, setclientConnected] = useState(false);
    const [data, setData] = useState("");
    const [clientData, setclientData] = useState("");
    const [clientId, setclientId] = useState("");
    const [contract, setContract] = useState();

    const connectContractClient = async() => {
        setclientConnected(true);
        document.getElementById("c-left").style.width = "0%";
        document.getElementById("c-center").style.width = "100%";
        document.getElementById("c-right").style.width = "0%";
        document.getElementById("flex").style.width = "300%";
        document.getElementById("flex").style.marginLeft = "-100%";
        const Address = "0x88583E7880a0d3541dD61684a83fc6B194cCB47b";
        const ABI = [
          {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "Approval",
            "type": "event",
            "inputs": [
              {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              },
              {
                "name": "approved",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              },
              {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
              }
            ],
            "anonymous": false
          },
          {
            "name": "ApprovalForAll",
            "type": "event",
            "inputs": [
              {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              },
              {
                "name": "operator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              },
              {
                "name": "approved",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
              }
            ],
            "anonymous": false
          },
          {
            "name": "NewCar",
            "type": "event",
            "inputs": [
              {
                "name": "carID",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
              },
              {
                "name": "vin",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "brand",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "model",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "color",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "production_year",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
              }
            ],
            "anonymous": false
          },
          {
            "name": "OwnershipTransferred",
            "type": "event",
            "inputs": [
              {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              },
              {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              }
            ],
            "anonymous": false
          },
          {
            "name": "Transfer",
            "type": "event",
            "inputs": [
              {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              },
              {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
              },
              {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
              }
            ],
            "anonymous": false
          },
          {
            "name": "Partners",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "bool",
                "internalType": "bool"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "_createCar",
            "type": "function",
            "inputs": [
              {
                "name": "_vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_brand",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_model",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_color",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_production_year",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "_address",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "approve",
            "type": "function",
            "inputs": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "balanceOf",
            "type": "function",
            "inputs": [
              {
                "name": "_owner",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [
              {
                "name": "_balance",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "carApprovals",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "carToOwner",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "cars",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [
              {
                "name": "vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "brand",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "model",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "color",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "production_year",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "contains_partner",
            "type": "function",
            "inputs": [
              {
                "name": "_partner",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "bool",
                "internalType": "bool"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "getApproved",
            "type": "function",
            "inputs": [
              {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "isApprovedForAll",
            "type": "function",
            "inputs": [
              {
                "name": "owner",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "operator",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "bool",
                "internalType": "bool"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "name",
            "type": "function",
            "inputs": [],
            "outputs": [
              {
                "name": "",
                "type": "string",
                "internalType": "string"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "owner",
            "type": "function",
            "inputs": [],
            "outputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "ownerCarCount",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "ownerOf",
            "type": "function",
            "inputs": [
              {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "ownerOfVin",
            "type": "function",
            "inputs": [
              {
                "name": "_vin",
                "type": "string",
                "internalType": "string"
              }
            ],
            "outputs": [
              {
                "name": "_owner",
                "type": "address",
                "internalType": "address"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "ownerToId",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "owners",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "string",
                "internalType": "string"
              }
            ],
            "outputs": [
              {
                "name": "vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "brand",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "model",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "color",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "production_year",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "renounceOwnership",
            "type": "function",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "safeTransferFrom",
            "type": "function",
            "inputs": [
              {
                "name": "from",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "safeTransferFrom",
            "type": "function",
            "inputs": [
              {
                "name": "from",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "setApprovalForAll",
            "type": "function",
            "inputs": [
              {
                "name": "operator",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "approved",
                "type": "bool",
                "internalType": "bool"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "setPartner",
            "type": "function",
            "inputs": [
              {
                "name": "_partner",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "supportsInterface",
            "type": "function",
            "inputs": [
              {
                "name": "interfaceId",
                "type": "bytes4",
                "internalType": "bytes4"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "bool",
                "internalType": "bool"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "symbol",
            "type": "function",
            "inputs": [],
            "outputs": [
              {
                "name": "",
                "type": "string",
                "internalType": "string"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "tokenURI",
            "type": "function",
            "inputs": [
              {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "string",
                "internalType": "string"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "transfer",
            "type": "function",
            "inputs": [
              {
                "name": "_to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "_tokenId",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "transferFrom",
            "type": "function",
            "inputs": [
              {
                "name": "from",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "transferOwnership",
            "type": "function",
            "inputs": [
              {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "vinToOwner",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "string",
                "internalType": "string"
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "address",
                "internalType": "address"
              }
            ],
            "stateMutability": "view"
          }
        ];
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setContract(new ethers.Contract(Address, ABI, signer));
    }

    const getInfos = async () => {
      var vin = document.getElementById("vin_c").value;
      const phrase = await contract.owners(vin);
      var phrase_finale = "";
      for(let i = 0; i < phrase.length; i++) {
        phrase_finale += phrase[i] + "\n";
      }
      setclientData(phrase_finale);
    }

    const getId = async () => {
      var myaddress = document.getElementById("addressc2").value;
      console.log(myaddress);
      var final = "";
      const yourId = await contract.ownerToId(myaddress);
      final = "" + yourId;
      console.log(final);
      setclientId(final);
    }

    const sellCar = async () => {
      var address = document.getElementById("clientAddress_c").value;
      var id = document.getElementById("id_c").value;
      var phrase = "";
      if(id === "" || address === "") {
        phrase = "Error in the creation of the model, please retry";
        setData(phrase);
      }
      else {
        await contract.transfer(address, id);
        phrase = "Your car has been sold successfully !\nYour page will reload in 5 seconds";
        setData(phrase);
        setTimeout(() => {
          window.location.reload(false);
        }, 5000)
      }
    }

    return (
        <div className="div">
            {!clientConnected && 
                <div className="div">
                    <button className="button" onClick={connectContractClient}>I am a customer 🤵‍♂️</button>
                </div>
            }
            {clientConnected && 
                <div className="div block">
                <div className="part">
                  <input type="text" placeholder="Enter the Owner's address" maxLength="42" className="w500" id="addressc2"></input>
                  <div className="space"></div>
                  <button className="button w250" onClick={getId}>Get my ID</button>
                  <div className="space"></div>
                  <code className="big-font">{clientId}</code>
                </div>
                <div className="space"></div>
                <div className="part">
                    <input type="text" placeholder="Enter the vin number" maxLength="17" className="w250" id="vin_c"></input>
                    <div className="space"></div>
                  <button className="button w250" onClick={getInfos}>Get client's car infos</button>
                  <div className="space"></div>
                  <code className="big-font">{clientData}</code>
                </div>
                <div className="space"></div>
                <div className="part">
                  <input type="text" placeholder="Enter the buyer's address" maxLength="42" className="w250" id="clientAddress_c"></input>
                  <div className="space"></div>
                  <input type="number" placeholder="Enter the ID" min="0" className="w250" id="id_c"></input>
                  <div className="space"></div>
                  <button className="button w250" onClick={sellCar}>Sell my car</button>
                  <div className="space"></div>
                  <code className="big-font">{data}</code>
                </div>
              </div>
            }
        </div>
    );
};

export default Client;