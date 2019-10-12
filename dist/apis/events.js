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
const events_api_1 = require("@slack/events-api");
const slackEvents = events_api_1.createEventAdapter((process.env.SLACK_SIGNING_SECRET));
function start(port, handler) {
    return __awaiter(this, void 0, void 0, function* () {
        return slackEvents.start(port).then(handler);
    });
}
exports.start = start;
function addEvent(type, handler) {
    return __awaiter(this, void 0, void 0, function* () {
        slackEvents.on(type, handler);
    });
}
exports.addEvent = addEvent;
//# sourceMappingURL=events.js.map