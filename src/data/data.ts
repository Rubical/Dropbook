import { IAirdropProject } from "../types/types";
import layerZeroImg from "../assets/project-logos/layerZero.png";
import starknetImg from "../assets/project-logos/starknet.png";
import zkSyncImg from "../assets/project-logos/zkSync.png";
import metamaskImg from "../assets/project-logos/metamask.png";
import arbitrumNovaImg from "../assets/project-logos/arbitrumNova.png";

export const projectsData: IAirdropProject[] = [
  {
    name: "LayerZero",
    logo: layerZeroImg,
    transactionCount: 100,
    transactionTarget: 100,
    bridgedAmount: 3000,
    bridgedTarget: 3000,
    updateTime: "29.07.2023",
  },
  {
    name: "ZkSync",
    logo: zkSyncImg,
    transactionCount: 70,
    transactionTarget: 100,
    bridgedAmount: 1400,
    bridgedTarget: 5000,
    updateTime: "30.07.2023",
  },
  {
    name: "Starknet",
    logo: starknetImg,
    transactionCount: 10,
    transactionTarget: 100,
    bridgedAmount: 200,
    bridgedTarget: 1000,
    updateTime: "30.07.2023",
  },
  {
    name: "Metamask",
    logo: metamaskImg,
    transactionCount: 15,
    transactionTarget: 100,
    bridgedAmount: 2100,
    bridgedTarget: 10000,
    updateTime: "29.07.2023",
  },
  {
    name: "ArbitrumNova",
    logo: arbitrumNovaImg,
    transactionCount: 17,
    transactionTarget: 100,
    bridgedAmount: 400,
    bridgedTarget: 5000,
    updateTime: "30.07.2023",
  },
];
