// src/index.ts

export { default as ChainSelector } from './components/chain-selector/ChainSelector';
export { default as SearchBar } from './components/search-bar/SearchBar';
export { default as Tables } from './components/tables/LegacyTables';
export type { Chain, SupportedTypes } from './interfaces/Chain';
export type { Block } from './interfaces/Block';
export type { 
    CoinTransaction,
    TokenTransfer,
    TokenMint,
    TokenBurn,
    Swap,
    ContractInteraction,
    LPCreate,
    LPAdd,
    LPRemove,
    DomainRegister,
    NFTMint,
    NFTTransfer,
    NFTBurn,
    Transaction
} from './interfaces/Transaction';
