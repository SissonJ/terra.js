import { JSONSerializable } from '../../../util/json';

export class MsgPermit extends JSONSerializable<
    MsgPermit.Amino,
    MsgPermit.Data,
    MsgPermit.Proto
> {

  constructor(
    public execute_msg: object
  ){
      super();
  }

  public static fromAmino(data: MsgPermit.Amino): MsgPermit{
    return new MsgPermit({});
  }

  public toAmino(): MsgPermit.Amino{
    return {
      type: 'signature_proof',
      value: this.execute_msg
    };
  }

  public static fromData(data: MsgPermit.Data): MsgPermit{
    return new MsgPermit({});
  }

  public toData(): MsgPermit.Data{
    return {};
  }

  public static fromProto(data: MsgPermit.Proto): MsgPermit{
    return new MsgPermit({});
  }

  public toProto(): MsgPermit.Proto{
    return {};
  }
}

export namespace MsgPermit {
  export interface Amino{

  }
  export interface Data{

  }
  export interface Proto{

  }
}