pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./DealerOwnership.sol";



contract Service{

    event NewService(uint serviceID, uint carID, string vin, string operation, uint mileage);

    struct Maintenance{
        string vin;
        string operation;
        uint mileage;
    }

    Maintenance[] public services;

    address [] public garages;

    //mapping (uint => uint) public serviceToCar;
    mapping (uint => address) public serviceToOwner;
    mapping (address => uint) public ownerServiceCount;
    mapping(address => bool) public Garages;

    function setGarage(address _garage) public{
        Garages[_garage]=true;
    }

    function contains_garage(address _garage) public view returns(bool){
        return Garages[_garage];
    }
}