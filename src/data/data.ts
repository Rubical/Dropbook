import { IAirdropProject } from "../types/types";
import layerZeroImg from "../assets/project-logos/layerZero.png";
import starknetImg from "../assets/project-logos/starknet.png";
import zkSyncImg from "../assets/project-logos/zkSync.png";
import {getZkSyncInfo} from "../features/ZkSync/ZkSync";

export const projectsData: IAirdropProject[] = [
  {
    name: "LayerZero",
    logo: layerZeroImg,
    transactionCount: 101,
    transactionTarget: 100,
    bridgedAmount: 30000,
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
    method: getZkSyncInfo
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
];
