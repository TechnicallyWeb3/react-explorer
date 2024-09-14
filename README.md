# React Explorer

`react-explorer` is a Next.js component library designed to provide a set of reusable React components for building modern web applications.

## Installation

You can install the package from npm using:

```bash
npm install @TW3/react-explorer
```

Or install the depends on your own with:
```bash
npm i
```

Installing via yarn:

```bash
yarn add react-explorer
```

Below is a list of required and optional fields for using the ChainSelector

```
    id: string;                             // Required
    name: string;                           // Required
    network: Network;                       // Required (network.name && network.transactionTypes) 
    chainId?: number;                       // Optional
    addressPattern?: RegExp;                // Optional
    explorerUrl?: string;                   // Optional
    rpcUrl?: string;                        // Optional
    apiUrl?: string;                        // Optional
    nativeCurrency: {                       // Required
        symbol: string;                     // Required (Chain Ticker)
        decimals: number;                   // Required (Chain decimals)
    };
    supportedEndpoints: SupportedEndpoints; // Required
    icon: string;                           // Required
```

### Current supported transactionTypes:

```
  "coin_transaction" 
  "token_transfer" 
  "token_mint" 
  "token_burn" 
  "swap" 
  "contract_interaction"
  "contract_creation"
  "lp_create"
  "lp_add"
  "lp_remove"
  "domain_register"
  "nft_mint"
  "nft_transfer"
  "nft_burn"
```

### The ChainSelector inline support:
```
inline='left 
inline='right 
Center for when you dont pass inline. 
```

### Example on how to pass paramaters to the ChainSelector and other components:


```
import { ChainSelector, SearchBar, SideNavbar, Tables, TopNavbar } from '@tw3/react-explorer';

function App() {
      const chainList = [
    {
      id: '1',
      name: 'Binance Smart Chain',
      network: {
        name: 'mainnet',
        transactionTypes: ['coin_transaction' , 'token_transfer'] as SupportedTypes[],
      },
      supportedEndpoints: {
        default: {
          endpoint: 'https://bsc-dataseed.binance.org/',
        },
      },
      icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18,
      },
    },
    {
      id: '2',
      name: 'Ethereum',
      network: {
        name: 'mainnet',
        transactionTypes: ['coin_transaction', 'token_transfer'] as SupportedTypes[],
      },
      supportedEndpoints: {
        default: {
          endpoint: 'https://mainnet.infura.io/v3/1234567890',
        },
      },
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
    },
  ];
    
  return (
    <div>
      <TopNavbar />
      <SideNavbar />
      <SearchBar />
      <ChainSelector chainList={chainList} inline="left" />
      <br></br>
      <ChainSelector chainList={chainList} inline="right" />
      <br></br>
      <ChainSelector chainList={chainList} />
      <Tables />
    </div>
  );
}

export default App;
```

Contributing
If you'd like to contribute to the project, please open an issue or submit a pull request on the GitHub repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.


### Summary

- **Installation**: Instructions for installing the package.
- **Usage**: How to use the components in a Next.js application.
- **Components**: Detailed information and examples for each component (`ChainSelector`, `SearchBar`, `SideNavbar`, `Tables`, `TopNavbar`).
- **Contributing**: How to contribute to the project.
- **License**: Licensing information.

Feel free to adjust the content according to the actual implementation and details of your components.
