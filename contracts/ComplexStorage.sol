// contracts/ComplexStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ComplexStorage {
    // Struct untuk menyimpan data dengan timestamp
    struct Data {
        uint256 value;
        uint256 timestamp;
    }
    
    // Mapping untuk menyimpan data berdasarkan alamat pengguna
    mapping(address => Data[]) public userStorage;
    
    // Event ketika data diubah
    event DataStored(address indexed user, uint256 value, uint256 timestamp);

    // Fungsi untuk menyimpan data baru
    function set(uint256 _value) public {
        userStorage[msg.sender].push(Data({
            value: _value,
            timestamp: block.timestamp
        }));
        
        emit DataStored(msg.sender, _value, block.timestamp);
    }

    // Fungsi untuk mendapatkan data terakhir dari pengguna
    function getLatest() public view returns (uint256, uint256) {
        require(userStorage[msg.sender].length > 0, "No data stored yet");
        Data memory latestData = userStorage[msg.sender][userStorage[msg.sender].length - 1];
        return (latestData.value, latestData.timestamp);
    }

    // Fungsi untuk mendapatkan semua data yang pernah disimpan oleh pengguna
    function getAll() public view returns (Data[] memory) {
        return userStorage[msg.sender];
    }
}
