"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
//import { MsgPermit } from "../src/core/permits/msgs/";
//import { Fee, TxBody } from "../src/core";
//import { SignDoc } from "../src/core";
var src_1 = require("../src");
var client = new src_1.LCDClient({
    chainID: 'bombay-12',
    URL: 'https://bombay-lcd.terra.dev'
});
// LocalTerra test1 terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v
var mk = new src_1.MnemonicKey({
    mnemonic: 'must improve idea hold long live ramp price bread motion beyond another smooth match flag way length gauge nation echo appear school process nut'
});
var wallet = client.wallet(mk);
var msg = new src_1.MsgPermit(mk.accAddress, "10000000", "secret1sr62lehajgwhdzpmnl65u35rugjrgznh2572mv", 10, "account-creation-permit");
console.log(mk.accAddress);
var coins = new src_1.Coin("uscrt", 0);
var fee = new src_1.Fee(1, [coins]);
console.log(fee.toAmino());
var txbody = new src_1.TxBody([msg], "");
var minfo = new src_1.ModeInfo(new src_1.ModeInfo.Single(src_1.ModeInfo.SignMode.SIGN_MODE_LEGACY_AMINO_JSON));
var sinfo = new src_1.SignerInfo(mk.publicKey, 0, minfo);
var ainfo = new src_1.AuthInfo([sinfo], fee);
var testsign = new src_1.SignDoc("columbus-5", 0, 0, ainfo, txbody);
console.log(testsign.toAmino());
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mk.createSignatureAmino(testsign)];
                case 1:
                    tx = _a.sent();
                    console.log(tx.data);
                    return [2 /*return*/];
            }
        });
    });
}
test();
