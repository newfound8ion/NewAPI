
import { IIdentity, ITxResult, IIssuer, IReciever, IAmount, IBalanceResult, IBCOptions } from "./core";

export interface IPoolInfoResult {
    code: string,
    desc: string,
    totalQuantityInGNCO: number
}


export interface IPool  {
    create(issuer: IIssuer, token: string): ITxResult,
    stake(issuer:IIssuer, pool: IIdentity, amount: IAmount): ITxResult
    unstake(issuer:IIssuer, pool: IIdentity, amount: IAmount): ITxResult
    delayedUnstake(issuer:IIssuer, pool: IIdentity, amount: IAmount): ITxResult
    redeemDelayedUnstake(issuer:IIssuer, pool: IIdentity,)
    get(pool: IIdentity): IPoolInfoResult
    getByCode(poolCode: string): IPoolInfoResult
}