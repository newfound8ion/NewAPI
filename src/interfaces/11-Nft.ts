import {ITxResult, IIssuer} from './core';

export interface IAssetField {
  name: string;
  type: string;
  value: string;
}

export interface IAssetInfo {
  immutable: Array<IAssetField>;
  mutable: Array<IAssetField>;
}

export interface ICreateSchemaInfo {
  name: string;
  fields: Array<IAssetField>; //TBD: Verify
}

export interface ICreateTemplateInfo {
  name: string;
  fields: Array<IAssetField>; //TBD: verify
}

export interface ICreateCollectionInfo {
  schema?: ICreateSchemaInfo;
  template: ICreateTemplateInfo;
  notify: boolean; //TODO verify what this does. was named AllowNotify
  royaltyFee: number; // in percent
  isSoulbound: boolean; //was xferable
  isBurnable: boolean;
  maxSupply: number; // max: 0xffff
}

export interface ICreateCollectionResult extends ITxResult {
  TxSchema: ITxResult;
  TxTemplate: ITxResult;
}

export interface INft {
  mint(issuer: IIssuer, collection: string, asset: IAssetInfo): ITxResult;
  createCollection(
    issuer: IIssuer,
    collection: string
  ): ICreateCollectionResult;
}
