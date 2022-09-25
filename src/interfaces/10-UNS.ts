import {ITxResult, IIssuer, IReciever, IBCOptions, ResourceType} from './core';

export interface ICreateAccountOptions {
  transferAssets: boolean;
}

export interface IKeyPairResult {
  publicKey: string;
  privateKey: string;
}

export interface IUns {
  createAccount(
    issuer: IIssuer,
    reciever: IReciever,
    options: IBCOptions
  ): Promise<ITxResult>;

  /**
   * Generally for transferring resources from/to accounts
   */
  transferRessource(
    type: ResourceType,
    issuer: IIssuer,
    reciever: IReciever
  ): Promise<ITxResult>;

  generateKeyPair(): Promise<IKeyPairResult>;
}
