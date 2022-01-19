//import { MsgPermit } from "../src/core/permits/msgs/";
//import { Fee, TxBody } from "../src/core";
//import { SignDoc } from "../src/core";
import { LCDClient, MnemonicKey, MsgPermit, Fee, TxBody, SignDoc, Coin, AuthInfo, SignerInfo, ModeInfo } from '../src';

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
    
const msg = new MsgPermit(
  mk.accAddress,
  "10000000",
  "secret1sr62lehajgwhdzpmnl65u35rugjrgznh2572mv",
  10,
  "account-creation-permit"
);

console.log(mk.accAddress)

const coins = new Coin("uscrt", 0);

const fee = new Fee(1, [coins]);
console.log(fee.toAmino());

const txbody = new TxBody([msg],"");

const minfo = new ModeInfo(new ModeInfo.Single(ModeInfo.SignMode.SIGN_MODE_LEGACY_AMINO_JSON));

const sinfo = new SignerInfo(mk.publicKey, 0, minfo);

const ainfo = new AuthInfo([sinfo],fee)

const testsign = new SignDoc("columbus-5", 0, 0, ainfo ,txbody);
console.log(testsign.toAmino());
async function test(){
  const tx = await mk.createSignatureAmino(testsign);
  console.log(tx.data)
}
test();

