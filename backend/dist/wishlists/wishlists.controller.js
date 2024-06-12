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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsController = void 0;
const common_1 = require("@nestjs/common");
const wishlists_service_1 = require("./wishlists.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const createWishlistDto_1 = require("./dto/createWishlistDto");
const updateWishlistDto_1 = require("./dto/updateWishlistDto");
let WishlistsController = class WishlistsController {
    constructor(wishlistsService) {
        this.wishlistsService = wishlistsService;
    }
    findAll() {
        return this.wishlistsService.find();
    }
    create(createWishlistDto, { user }) {
        return this.wishlistsService.create(createWishlistDto, user.id);
    }
    findOne(id) {
        return this.wishlistsService.findOne(id);
    }
    update(id, updateWishlistDto, { user }) {
        return this.wishlistsService.update(id, updateWishlistDto, user.id);
    }
    deleteOne(id, { user }) {
        return this.wishlistsService.deleteOne(id, user.id);
    }
};
exports.WishlistsController = WishlistsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createWishlistDto_1.CreateWishlistDto, Object]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateWishlistDto_1.UpdateWishlistDto, Object]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "deleteOne", null);
exports.WishlistsController = WishlistsController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('wishlistlists'),
    __metadata("design:paramtypes", [wishlists_service_1.WishlistsService])
], WishlistsController);
//# sourceMappingURL=wishlists.controller.js.map