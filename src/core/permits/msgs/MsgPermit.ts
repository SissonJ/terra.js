import { JSONSerializable } from '../../../util/json';

export class MsgPermit extends JSONSerializable<
  MsgPermit.Amino,
  MsgPermit.Data,
  MsgPermit.Proto
> {
  constructor(
    public address: string,
    public amount: string,
    public contract: string,
    public index: number,
    public key: string
  ) {
    super();
  }

  // @ts-ignore
  public static fromAmino(data: MsgPermit.Amino): MsgPermit {
    const {
      value: { address, amount, contract, index, key },
    } = data;
    return new MsgPermit(address, amount, contract, index, key);
  }

  public toAmino(): MsgPermit.Amino {
    const { address, amount, contract, index, key } = this;
    return {
      type: 'signature_proof',
      value: {
        address,
        amount,
        contract,
        index,
        key,
      },
    };
  }

  // @ts-ignore
  public static fromData(data: MsgPermit.Data): MsgPermit {
    return new MsgPermit('', '', '', 0, '');
  }

  public toData(): MsgPermit.Data {
    const { address, amount, contract, index, key} = this;
    return {
      '@type': 'signature_proof',
      address,
      amount,
      contract,
      index,
      key,
    };
  }

  // @ts-ignore
  public static fromProto(data: MsgPermit.Proto): MsgPermit {
    return new MsgPermit('', '', '', 0, '');
  }

  public toProto(): MsgPermit.Proto {
    return '';
  }
}

export namespace MsgPermit {
  export interface Amino {
    type: 'signature_proof';
    value: {
      address: string;
      amount: string;
      contract: string;
      index: number;
      key: string;
    };
  }
  export interface Data {
    '@type': 'signature_proof';
    address: string;
    amount: string;
    contract: string;
    index: number;
    key: string;
  }
  export type Proto = '';
}
