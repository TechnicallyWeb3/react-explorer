export type SupportedTypes = 
  | "coin_transaction" 
  | "token_transfer" 
  | "token_mint" 
  | "token_burn" 
  | "swap" 
  | "contract_interaction"
  | "contract_creation"
  | "lp_create"
  | "lp_add"
  | "lp_remove"
  | "domain_register"
  | "nft_mint"
  | "nft_transfer"
  | "nft_burn";

// New type for endpoint configuration
export type EndpointConfig = {
    alternateUrl?: string;
    endpoint: string;
    params?: Record<string, string>;
};

// New type for supported endpoints
export type SupportedEndpoints = {
    [key: string]: EndpointConfig;
};


// Update the Chain type to include supportedEndpoints
export type Network = {
    name: string;
    transactionTypes: SupportedTypes[];
    addressPattern?: RegExp;
    checksumAddress?: (address: string) => string;
    supportsSmartContracts?: boolean;
};

export type Chain = {
    id: string;
    name: string;
    network: Network;
    chainId?: number;
    addressPattern?: RegExp;
    explorerUrl?: string;
    rpcUrl?: string;
    apiUrl?: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    supportedEndpoints: SupportedEndpoints;
    icon: string;
};