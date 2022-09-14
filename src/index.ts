import { IUns } from "./interfaces/10-UNS";
import { INft } from "./interfaces/11-Nft";
import { IToken } from "./interfaces/20-Token";
import { INftMarket } from "./interfaces/21-NftMarket";
import { IPool } from "./interfaces/22-pool";
import { IDao } from "./interfaces/30-DAO";

export interface INewApi {
    uns: IUns,
    nft: INft,
    token: IToken,
    NftMarket: INftMarket,
    pools: IPool,
    dao: IDao
}
