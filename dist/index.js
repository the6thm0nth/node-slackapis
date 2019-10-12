"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apis_1 = __importDefault(require("./apis"));
class SlackApi {
    constructor() {
        this.events = [];
    }
    getEvents() {
        return this.events;
    }
    addEvent(eventName, handler) {
        this.events.push(eventName);
        apis_1.default.events.addEvent(eventName, handler);
    }
    getChannel(q) {
        return apis_1.default.web.getChannel(q);
    }
    sendMessage(channel, text) {
        return apis_1.default.web.sendMessage(channel, text);
    }
}
exports.default = new SlackApi();
//# sourceMappingURL=index.js.map