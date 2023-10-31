export interface IAirdropProject {
  name: string;
  logo: string;
  transactionCount: number;
  transactionTarget: number;
  bridgedAmount: number;
  bridgedTarget: number;
  updateTime: string;
  method: (agr0:string)=> {}
}

export interface ITransfer {
  from: string;
  to: string;
  transactionHash: string;
  timestamp: string;
  amount: string;
  tokenAddress: string;
  type: string;
  fields: null;
  token: {
    l2Address: string;
    l1Address: string;
    symbol: string;
    name: string;
    decimals: number;
    price: number;
  };
}
