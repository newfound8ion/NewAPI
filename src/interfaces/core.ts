


/**
 * A General blockchain identity. Can be either with name or with public key. 
 * The private key is only required, when it acts as issuer of a transaction
 */
 export interface IIdentity {
    name?: string,
    pubKey?: string,
}

/**
 * IIssuer is the issuer of a authenticated transaction
 */
export interface IIssuer extends IIdentity {
    privKey: string
}

export interface IReciever extends IIdentity {

}

/**
 * Interface for creating new accounts
 * TODO: Active keys are not available in other blockchains, will we    
 */
export interface INewAccount extends IIdentity {
    pubKey: string,
    pubActiveKey: string,
}

/**
 * A Token amount.
 * The Token is optional, as often the transaction already requires a specific token.
 */
export interface IAmount {
    amount: number,
    token?: string
}


export interface ITxResult {
    TxID: string,
}

export interface IBalanceResult {
    amount: number,
    token: string
}

/**
 * Identifies Blockchain specific options for action handling
 */
export interface IBCOptions {

}

export enum ResourceType {
    RAM,
    CPU,
    NET
}