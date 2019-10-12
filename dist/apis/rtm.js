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
Object.defineProperty(exports, "__esModule", { value: true });
const rtm_api_1 = require("@slack/rtm-api");
const token = process.env.SLACK_TOKEN;
const rtm = new rtm_api_1.RTMClient(token);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        return rtm.start().catch(console.error);
    });
}
exports.start = start;
function addEventHandlers(type, handler) {
    return __awaiter(this, void 0, void 0, function* () {
        rtm.on(type, handler);
        rtm.on("message.im", e => {
            console.log(e);
        });
    });
}
exports.addEventHandlers = addEventHandlers;
//# sourceMappingURL=rtm.js.map