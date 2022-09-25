import {IUns} from './src/interfaces/10-UNS';
import {INft} from './src/interfaces/11-Nft';
import {IToken} from './src/interfaces/20-Token';
import {INftMarket} from './src/interfaces/21-NftMarket';
import {IPool} from './src/interfaces/22-pool';
import {IDao} from './src/interfaces/30-DAO';

export {IUns, INft, IToken, INftMarket, IPool, IDao};

export interface INewApi {
  uns: IUns;
  nft: INft;
  token: IToken;
  NftMarket: INftMarket;
  pools: IPool;
  dao: IDao;
}
