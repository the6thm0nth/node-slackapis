"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIdQuery(q) {
    return q.id !== undefined;
}
exports.isIdQuery = isIdQuery;
class UnreachableError extends Error {
    constructor(val, message) {
        super(`TypeScript thought we could never end up here\n${message}`);
    }
}
exports.UnreachableError = UnreachableError;
//# sourceMappingURL=types.js.map