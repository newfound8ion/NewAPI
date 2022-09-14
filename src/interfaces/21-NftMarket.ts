import { ITxResult, IIssuer, IReciever, IBCOptions, ResourceType, IAmount, IIdentity } from "./core";

export interface IOfferOptions {
    assets: Array<string>,
    collectionName: string,
    minPrice: IAmount,
    buyNowPrice: IAmount,
    precision: number,
    startDate: Date,
    endDate: Date,
}

export interface IDutchOfferOptions extends IOfferOptions {
    discountRate: number,
    discountInterval: number
}

export interface INftMarket {
    createOffer(issuer: IIssuer, options: IOfferOptions): ITxResult
    createDutchOffer(issuer: IIssuer, options: IDutchOfferOptions): ITxResult
    editOffer(issuer: IIssuer, options: IOfferOptions): ITxResult
    editDutchOffer(issuer: IIssuer, options: IDutchOfferOptions): ITxResult
    cancelOffer(issuer: IIssuer, auctionId: string): ITxResult
    placeBid(issuer: IIssuer, offerId: string, amount: IAmount): ITxResult
    claimEarnings(owner: IIdentity, offerId: string): ITxResult
    claimAssets(owner: IIdentity, offerId: string): ITxResult
    
}