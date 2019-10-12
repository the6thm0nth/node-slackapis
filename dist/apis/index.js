"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const events = __importStar(require("./events"));
const rtm = __importStar(require("./rtm"));
const web = __importStar(require("./web"));
exports.default = {
    events,
    rtm,
    web
};
//# sourceMappingURL=index.js.map