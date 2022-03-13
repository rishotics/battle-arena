import Moralis from 'moralis/dist/moralis.min.js';

const eBettingABI = 
[
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_sattaTokenAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_apiToken",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "teamToWin",
                "type": "uint256"
            }
        ],
        "name": "BetPlaced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "ChainlinkCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "ChainlinkFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "ChainlinkRequested",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_matchId",
                "type": "uint256"
            }
        ],
        "name": "checkAndDistributeRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_requestId",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "_result",
                "type": "uint256"
            }
        ],
        "name": "distributeRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_matchId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_teamAId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_teamBId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_teamToWinId",
                "type": "uint256"
            }
        ],
        "name": "placeBet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_url",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_matchId",
                "type": "uint256"
            },
            {
                "internalType": "bytes4",
                "name": "_selector",
                "type": "bytes4"
            }
        ],
        "name": "requestMatchStatus",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "requestId",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_apiToken",
                "type": "string"
            }
        ],
        "name": "setApiToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_oracle",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "_jobId",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "_fee",
                "type": "uint256"
            }
        ],
        "name": "setOracleSpecifications",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bettingAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_matchId",
                "type": "uint256"
            }
        ],
        "name": "getMatch",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "matchId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "teamA",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "teamB",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalPayoutA",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalPayoutB",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address[]",
                        "name": "betsOnA",
                        "type": "address[]"
                    },
                    {
                        "internalType": "address[]",
                        "name": "betsOnB",
                        "type": "address[]"
                    },
                    {
                        "internalType": "string",
                        "name": "apiUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "winner",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "ended",
                        "type": "bool"
                    }
                ],
                "internalType": "struct CryptoEGameBetting.Match",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "satta",
        "outputs": [
            {
                "internalType": "contract ERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const sattaABI = 
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function sleep(seconds) 
{
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
}

export async function executeGetMatch(_matchId) {
    let options = {
        contractAddress: "0x6f3C3E50A7E30491363a535eB2d04688Ebe14db7",
        functionName : "getMatch",
        abi: eBettingABI,
        params:{
            _matchId: _matchId
        },
    };
    await Moralis.executeFunction(options);
    console.log("getMatch method executed");
}

export async function executePlaceBet(_matchId, _teamAId, _teamBId, _teamToWinId) {
    let optionsSatta = {
        contractAddress: "0x13Fbc3E234aEdf23fd59cdE2A5F1654B541b09d0",
        functionName : "approve",
        abi: sattaABI,
        params:{
            spender: "0x6f3C3E50A7E30491363a535eB2d04688Ebe14db7",
            amount: "10000000000000000000",
        },
    }
    await Moralis.executeFunction(optionsSatta);
    console.log("SATTA allowance method executed");

    sleep(10);
    
    let options = {
        contractAddress: "0x6f3C3E50A7E30491363a535eB2d04688Ebe14db7",
        functionName : "placeBet",
        abi: eBettingABI,
        params:{
            _matchId: _matchId,
            _teamAId: _teamAId,
            _teamBId: _teamBId,
            _teamToWinId: _teamToWinId,
        },
    }
    await Moralis.executeFunction(options);
    console.log("placeBet method executed");
}

export async function executeCheckAndDistributeRewards(_matchId) {
    let options = {
        contractAddress: "0x6f3C3E50A7E30491363a535eB2d04688Ebe14db7",
        functionName : "checkAndDistributeRewards",
        abi: eBettingABI,
        params:{
            _matchId: _matchId
        },
    };
    await Moralis.executeFunction(options);
    console.log("method executed");
}