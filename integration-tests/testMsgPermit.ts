//import { MsgPermit } from "../src/core/permits/msgs/";
//import { Fee, TxBody } from "../src/core";
//import { SignDoc } from "../src/core";
import { LCDClient, MnemonicKey, MsgPermit, Fee, TxBody, SignDoc } from '../src';

const client = new LCDClient({
  chainID: 'bombay-12',
  URL: 'https://bombay-lcd.terra.dev',
});

// LocalTerra test1 terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v
const mk = new MnemonicKey({
  mnemonic:
    'must improve idea hold long live ramp price bread motion beyond another smooth match flag way length gauge nation echo appear school process nut',
});

const wallet = client.wallet(mk);

async function main(){
    const msg = new MsgPermit(
        "terra1j8wupj3kpclp98dgg4j5am44kjykx6uztjttyr",
        "10000000",
        "secret1sr62lehajgwhdzpmnl65u35rugjrgznh2572mv",
        10,
        "account-creation-permit"
    );

    const fee = new Fee(0, {denom : "uscrt", amount : "0",});

    console.log(fee.toAmino());

    const txbody = new TxBody([msg],"");

    //const testsign = new SignDoc("columbus-5", 0, 0, txbody);

    console.log( );
}