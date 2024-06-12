"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const wishes_module_1 = require("./wishes/wishes.module");
const wishlists_module_1 = require("./wishlists/wishlists.module");
const offers_module_1 = require("./offers/offers.module");
const auth_module_1 = require("./auth/auth.module");
const hash_module_1 = require("./hash/hash.module");
const user_entity_1 = require("./users/user.entity");
const wish_entity_1 = require("./wishes/wish.entity");
const wishlist_entity_1 = require("./wishlists/wishlist.entity");
const offer_entity_1 = require("./offers/offer.entity");
const config_1 = require("@nestjs/config");
const config_2 = require("./config/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'student',
                password: 'student',
                database: 'kupipodariday',
                schema: 'kupipodariday',
                entities: [user_entity_1.User, wish_entity_1.Wish, wishlist_entity_1.WishList, offer_entity_1.Offer],
                synchronize: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [config_2.config],
            }),
            users_module_1.UsersModule,
            wishes_module_1.WishesModule,
            wishlists_module_1.WishlistsModule,
            offers_module_1.OffersModule,
            auth_module_1.AuthModule,
            hash_module_1.HashModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map