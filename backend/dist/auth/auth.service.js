"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const users_service_1 = require("../users/users.service");
const hash_service_1 = require("../hash/hash.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService, hashService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.hashService = hashService;
    }
    async validate(username, password) {
        const user = await this.userService.findOne(username);
        if (!user || !this.hashService.compare(password, user.password))
            return null;
        return user;
    }
    signup(signUpDto) {
        return this.userService.create(signUpDto);
    }
    async signin(user) {
        const token = this.jwtService.sign({
            id: user.id,
            username: user.username,
        });
        return {
            access_token: token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService,
        hash_service_1.HashService])
], AuthService);
//# sourceMappingURL=auth.service.js.map