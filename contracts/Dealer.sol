pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";


contract Dealer is Ownable {

    event NewCar(uint carID, string vin, string brand, string model, string color, uint production_year);

    struct Car{
        string vin;  //Serial number of the car : contains all the informations regarding the model/options/...
        string brand;
        string model;
        string color;
        uint production_year;
    }

    Car[] public cars;

    mapping (string => address) public vinToOwner;
    
    mapping (address => uint) public ownerCarCount;

    mapping (uint => address) public carToOwner;

    mapping (address => uint) public ownerToId;
    
    /*address dealer = "0x77DbD1ddF6d9BfaB2aD5e76986A0628BB09B8Ae9";

    function _defineDealer (address _dealer)public onlyOwner returns(address){
        return _dealer;
    }*/
}