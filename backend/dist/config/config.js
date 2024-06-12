"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => ({
    port: Number(process.env.PORT),
    jwtSecret: process.env.jwtSecret,
});
exports.config = config;
//# sourceMappingURL=config.js.map