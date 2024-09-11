"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
const BASE = 'App';
const enabled = true; // process.env.NODE_ENV === AppEnv.PRODUCTION
const GenerateMessage = (context, level, message, source) => {
    const namespace = `${context}:${level}`;
    const log = (0, debug_1.default)(namespace);
    // log.color = COLOUR[level]
    log.enabled = enabled;
    debug_1.default.enable(namespace);
    if (source) {
        log(source, message);
    }
    else {
        log(message);
    }
};
class Logger {
    static trace(message, source, context = BASE) {
        return GenerateMessage(context, 'TRACE', message, source);
    }
    static log(message, source, context = BASE) {
        return GenerateMessage(context, 'LOG', message, source);
    }
    static info(message, source, context = BASE) {
        return GenerateMessage(context, 'INFO', message, source);
    }
    static warn(message, source, context = BASE) {
        return GenerateMessage(context, 'WARN', message, source);
    }
    static error(message, source, context = BASE) {
        return GenerateMessage(context, 'ERROR', message, source);
    }
    static print(message, source, context = BASE) {
        return GenerateMessage(context, 'INFO', message, source);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map