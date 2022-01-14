import{ MsgPermit } from './MsgPermit';

export * from './MsgPermit';

export type PermitMsg = 
    MsgPermit;

export namespace PermitMsg {
    export type Amino = 
        MsgPermit.Amino;
    export type Data = 
        MsgPermit.Data;
    export type Proto =
        MsgPermit.Proto;
}