pragma solidity ^0.8.9;

import "./Dealer.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract DealerOwnership is Dealer, ERC721{

    constructor() ERC721("Dealer", "IDC") { }

    mapping(uint => address)public carApprovals;

    mapping(address => bool) public Partners;

    mapping(string => Car)public owners;

    function setPartner(address _partner) public{
        Partners[_partner]=true;
    }

    function contains_partner(address _partner) public view returns(bool){
        return Partners[_partner];
    }

    function balanceOf(address _owner) public override view returns (uint256 _balance) {
        return ownerCarCount[_owner];
    }

    function ownerOfVin(string memory _vin) public view returns (address _owner) {
        return vinToOwner[_vin];
    }

    function _ownerOf(uint256 tokenId) internal override view virtual returns (address) {
        return carToOwner[tokenId];
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal override virtual{
        require(msg.sender == carToOwner[_tokenId]);
        ownerCarCount[_from]--;
        ownerCarCount[_to]++;
        ownerToId[_from] = 0;
        ownerToId[_to] = _tokenId;
        //vinToOwner[_vin] = _to;
        carToOwner[_tokenId] = _to;  
        emit Transfer(_from, _to, _tokenId);
    }

    function _transfer1(address _from, address _to, uint256 _tokenId) internal virtual{
        ownerCarCount[_to]++;
        carToOwner[_tokenId] = _to;
        emit Transfer(_from, _to, _tokenId);
    }
    
    function transfer(address _to, uint256 _tokenId) public{
        address temp = 0x0000000000000000000000000000000000000000;
        require(carToOwner[_tokenId] != temp);
        _transfer(msg.sender, _to, _tokenId);
    }
    
    // function approve(address _to, uint256 _tokenId) public override {
    //     carApprovals[_tokenId] = _to;
    //     emit Approval(msg.sender, _to, _tokenId);
    // }

    // function takeOwnership(uint256 _tokenId) public {
    //     require(carApprovals[_tokenId] == msg.sender);
    //     address owner = ownerOf(_tokenId);
    //     _transfer(owner, msg.sender, _tokenId);
    // }
    
    function transferOwnership(address newOwner) public override virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    function _createCar(string memory _vin, string memory _brand, string memory _model, string memory _color, uint _production_year, address _address) public{
        //require(contains_partner(msg.sender) == true);
        cars.push(Car(_vin, _brand, _model, _color, _production_year));
        uint id = cars.length -1;
        owners[_vin] = Car(_vin, _brand, _model, _color, _production_year);
        carToOwner[id] = _address;
        vinToOwner[_vin] = _address;
        ownerCarCount[_address]++;
        ownerToId[_address] = id;
        emit NewCar(id, _vin, _brand, _model, _color, _production_year);
        _transfer1(msg.sender, _address, id);
    }

}