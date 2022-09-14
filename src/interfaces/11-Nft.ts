import { ITxResult, IIssuer, IReciever, IBCOptions, ResourceType } from "./core";

export interface IAssetField {
    name: string,
    type: string,
    value:string
}

export interface IAssetInfo {
    immutable: Array<IAssetField>
    mutable: Array<IAssetField>
}

export interface INft {
    mint(issuer: IIssuer, collection:string, )
}