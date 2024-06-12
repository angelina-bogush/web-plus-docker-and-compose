"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtOptions = void 0;
const config_1 = require("@nestjs/config");
const jwtModuleOptions = (configService) => ({
    secret: configService.get('jwtSecret'),
    signOptions: {
        expiresIn: configService.get('jwtExp', '5m'),
    },
});
const jwtOptions = () => ({
    inject: [config_1.ConfigService],
    useFactory: (configService) => jwtModuleOptions(configService),
});
exports.jwtOptions = jwtOptions;
//# sourceMappingURL=jwt.js.map