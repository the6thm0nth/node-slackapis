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
const web_api_1 = require("@slack/web-api");
const types_1 = require("../types");
const token = process.env.SLACK_TOKEN;
const web = new web_api_1.WebClient(token);
function getChannel(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = (yield web.channels.list());
        return res.channels.find(c => {
            if (types_1.isIdQuery(query)) {
                return c.id === query.id;
            }
            else {
                return c.name === query.name;
            }
        });
    });
}
exports.getChannel = getChannel;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const members = yield getUsers();
        return members.find(member => member.id === id);
    });
}
exports.getUserById = getUserById;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield web.users.list()).members;
    });
}
function sendMessage(channel, text) {
    return __awaiter(this, void 0, void 0, function* () {
        return web.chat.postMessage({
            channel,
            text,
            parse: "full"
        });
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=web.js.map