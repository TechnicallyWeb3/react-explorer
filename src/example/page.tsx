import { ChainSelector, SearchBar, Tables, Chain, SupportedTypes } from '../../src';
// import { Chain, SupportedTypes } from '../../src/interfaces/Chain';

function App() {
      const chainList: Chain[] = [
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