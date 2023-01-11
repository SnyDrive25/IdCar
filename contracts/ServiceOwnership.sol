pragma solidity ^0.8.9;

import "./Service.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract ServiceOwnership is Service, ERC721{

    constructor() ERC721("Service", "SRV") { }

    mapping(string => Maintenance) public servlist;

    function balanceOf(address _owner) public override view returns (uint256 _balance) {
        return ownerServiceCount[_owner];
    }

    function _ownerOf(uint256 tokenId) internal override view virtual returns (address) {
        return serviceToOwner[tokenId];
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal override virtual{
        //vinToOwner[_vin] = _to;
        serviceToOwner[_tokenId];  
        emit Transfer(_from, _to, _tokenId);
    }
    
    function transfer(address _to, uint256 _tokenId) public  {
        address temp = 0x0000000000000000000000000000000000000000;
        require(serviceToOwner[_tokenId] != temp);
        _transfer(msg.sender, _to, _tokenId);
    }

    function _createService (uint _carID, string memory _vin, string memory _operation, uint _mileage, address _address) public{
        //require(contains_garage(msg.sender) == true);
        services.push(Maintenance(_vin, _operation, _mileage));
        uint id = services.length -1;
        servlist[_vin] = Maintenance(_vin, _operation, _mileage);
        serviceToOwner[id] = _address;
        ownerServiceCount[_address]++;
        emit NewService(id, _carID, _vin, _operation, _mileage);
        _transfer(msg.sender, _address, id);
    }

}