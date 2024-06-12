"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersModule = void 0;
const common_1 = require("@nestjs/common");
const offers_service_1 = require("./offers.service");
const offers_controller_1 = require("./offers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const offer_entity_1 = require("./offer.entity");
const users_module_1 = require("../users/users.module");
const wishes_module_1 = require("../wishes/wishes.module");
let OffersModule = class OffersModule {
};
exports.OffersModule = OffersModule;
exports.OffersModule = OffersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([offer_entity_1.Offer]), users_module_1.UsersModule, wishes_module_1.WishesModule],
        providers: [offers_service_1.OffersService],
        controllers: [offers_controller_1.OffersController],
    })
], OffersModule);
//# sourceMappingURL=offers.module.js.map