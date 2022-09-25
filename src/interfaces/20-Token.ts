import {
  IIdentity,
  ITxResult,
  IIssuer,
  IReciever,
  IAmount,
  IBalanceResult,
} from './core';

export interface IToken {
  sendToken(issuer: IIssuer, reciever: IReciever, amount: IAmount): ITxResult;
  getBalance(owner: IIdentity, token: string): IBalanceResult;
}
