import { ethers } from "ethers";
import { useState } from "react";

function Partner() {

    const [partnerConnected, setPartnerConnected] = useState(false);
    const [partnerData, setPartnerData] = useState("");
    const [carData, setCarData] = useState("");
    const [contract, setContract] = useState();

    const connectContractDealer = async() => {
        setPartnerConnected(true);
        document.getElementById("c-left").style.width = "100%";
        document.getElementById("c-center").style.width = "0%";
        document.getElementById("c-right").style.width = "0%";
        document.getElementById("flex").style.width = "300%";
        document.getElementById("flex").style.marginLeft = "0%";
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
/*
    const setOwner = async () => {
        var address = document.getElementById("ownerAddress").value;
        const phrase = await contract.add_concess(address);
        setOwnerData(phrase);
        window.location.reload(false);
    }
*/
    const getData = async () => {
        var id = document.getElementById("id").value;//.toUpperCase();
        const phrase = await contract.carToOwner(id);
        setPartnerData(phrase);
    }

    const setCar = async () => {
        var address = document.getElementById("clientAddress").value;
        var vinNumber = document.getElementById("vinNumber").value;//.toUpperCase();
        var brand = document.getElementById("brand").value;
        var year = document.getElementById("year").value;
        var model = document.getElementById("model").value;
        var color = document.getElementById("color").value;
        var phrase = "";
        if(vinNumber === "" || model === "" || model === "select") {
          phrase = "Error in the creation of the model, please retry";
          setCarData(phrase);
        }
        else {
          await contract._createCar(vinNumber, brand, model, color, year, address);
          var yourId = await contract.ownerToId(address);
          phrase = "Your " + model + " has been created successfully !\nIts ID is : " + yourId + "\nYour page will reload in 5 seconds";
          setCarData(phrase);
          setTimeout(() => {
            window.location.reload(false);
          }, 5000)
        }
    }

    return (
        <div className="div">
            {!partnerConnected && 
                <div className="div">
                    <button className="button" onClick={connectContractDealer}>I am a dealer 🚗</button>
                </div>
            }
            {partnerConnected && 
                <div className="div block">
                  <div className="part">
                    <input type="number" placeholder="Enter the car ID" min="0" className="w250" id="id"></input>
                    <div className="space"></div>
                    <button className="button w250" onClick={getData}>Get client address</button>
                    <div className="space"></div>
                    <code className="big-font">{partnerData}</code>
                  </div>
                  <div className="space"></div>
                  <div className="part">
                    <input type="text" placeholder="Enter the Owner's address" maxLength="42" className="w500" id="clientAddress"></input>
                    <div className="space"></div>
                    <input type="text" placeholder="Enter the vin number" maxLength="17" className="w500" id="vinNumber"></input>
                    <div className="space"></div>
                    <select className="w250" id="brand">
                      <option value="select" defaultValue>Enter the brand</option>
                      <option value="Renault">Renault</option>
                    </select>
                    <span className="sp-space"></span>
                    <select className="w250" id="model">
                      <option value="select" defaultValue>Select the model</option>
                      <option value="Twingo">Twingo</option>
                      <option value="Clio">Clio</option>
                      <option value="Megane">Megane</option>
                      <option value="Captur">Captur</option>
                      <option value="Espace">Espace</option>
                      <option value="Talisman">Talisman</option>
                      <option value="Kangoo">Kangoo</option>
                      <option value="Austral">Austral</option>
                    </select>
                    <div className="space"></div>
                    <input type="number" placeholder="Enter the release year" className="w250" min="1950" max="2050" id="year"></input>
                    <span className="sp-space"></span>
                    <input type="text" placeholder="Enter the color" className="w250" id="color"></input>
                    <div className="space"></div>
                    <button className="button w250" onClick={setCar}>Create a new car</button>
                    <div className="space"></div>
                    <code className="big-font">{carData}</code>
                  </div>
                </div>
            }
        </div>
    );
};

export default Partner;