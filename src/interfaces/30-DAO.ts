
import { IIdentity, ITxResult, IIssuer, IReciever, IAmount, IBalanceResult, IBCOptions } from "./core";

export interface IDaoResult {
    DaoId: string,
    Issuer: IIdentity
}

export interface IListOptions {
    limit?: number,
    lowerBound?: number,
    uppwerBound?: number,
    reverse?: boolean
}

export enum ProposalType {
    standard,
    stake,
    nft,
    inflate,
    deflate,
    whitelist
}

export interface IListProposalOptions extends IListOptions {
    proposalAuthor?: IIdentity
    proposalType: ProposalType
}

export interface IVoteInfoResult {
    //TBD
}

export interface IProposalInfoResult {
    //TBD
}

export interface IListResult<InfoType> {
    list: [InfoType] 
    daoId?: string // only if the results are limited to a single DAO
}


export interface IBaseProposalOptions {
    voteStart: Date,
    voteEnd: Date

}

export interface IProposalOptions extends IBaseProposalOptions {
    summary: string,
    title: string,
    url: string
}


export interface IStakeProposalOptions extends IBaseProposalOptions {
    amount: number,
    token: string,
    reciever: IReciever
}

export interface IWhitelistProposalOptions extends IBaseProposalOptions {
    reciever: IReciever
}

export interface IProposalResult extends ITxResult {
    daoId: string,
    proposalId: string
}

export interface IDao { 
    create(issuer: IIssuer, desc: string): ITxResult,
    get(dao: IIdentity): IDaoResult //TODO
    getById(dao: string): IDaoResult //TODO
    listVotes(from: IIdentity, options: IListOptions): IListResult<IVoteInfoResult>
    listProposals(daoOwner: IIdentity, options: IListProposalOptions): IListResult<IProposalInfoResult>
    propose(issuer: IIssuer, dao: IIdentity, options: IProposalOptions): IProposalResult
    proposeById(issuer: IIssuer, daoId: string, options: IProposalOptions): IProposalResult    
    propose<Option extends IBaseProposalOptions>(issuer: IIssuer, dao: IIdentity, options: Option): IProposalResult
    proposeById<Option extends IBaseProposalOptions>(issuer: IIssuer, daoId: string, options: Option): IProposalResult
    approveProposal(issuer: IIssuer, proposal: string, DaoOwner: IIdentity): ITxResult
    approveProposalByDaoId(issuer: IIssuer, proposal: string, DaoId: string): ITxResult
    executeProposal(issuer: IIssuer, proposal: string, DaoOwner: IIdentity): ITxResult
    executeProposalByDaoId(issuer: IIssuer, proposal: string, DaoId: string): ITxResult
    vote(issuer: IIssuer, amount: number, proposal: string, DaoOwner: IIdentity): ITxResult
    voteByDaoId(issuer: IIssuer, amount: number, proposal: string, DaoId: string): ITxResult
    withdrawVoteToken(issuer: IIssuer, VoteId: string): ITxResult

}