import {IIdentity, ITxResult, IIssuer, IAmount} from './core';

export interface IPoolInfoResult {
  code: string;
  desc: string;
  totalQuantityInGNCO: number;
}

export interface IPool {
  create(issuer: IIssuer, token: string): ITxResult;
  stake(issuer: IIssuer, pool: IIdentity, amount: IAmount): ITxResult;
  unstake(issuer: IIssuer, pool: IIdentity, amount: IAmount): ITxResult;
  delayedUnstake(issuer: IIssuer, pool: IIdentity, amount: IAmount): ITxResult;
  redeemDelayedUnstake(issuer: IIssuer, pool: IIdentity): ITxResult;
  get(pool: IIdentity): IPoolInfoResult;
  getByCode(poolCode: string): IPoolInfoResult;
}
