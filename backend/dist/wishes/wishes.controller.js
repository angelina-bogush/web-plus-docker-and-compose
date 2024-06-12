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
exports.WishesController = void 0;
const common_1 = require("@nestjs/common");
const wishes_service_1 = require("./wishes.service");
const createWishDto_1 = require("./dto/createWishDto");
const updateWishDto_1 = require("./dto/updateWishDto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let WishesController = class WishesController {
    constructor(wishService) {
        this.wishService = wishService;
    }
    async create({ user }, createWishDto) {
        const wish = await this.wishService.create(user.id, createWishDto);
        return wish;
    }
    findLast() {
        return this.wishService.findLast(5)[0];
    }
    findTop() {
        return this.wishService.findTop(5);
    }
    findOne(id) {
        return this.wishService.findOne(id);
    }
    copy(id, { user }) {
        return this.wishService.copy(id, user.id);
    }
    update(id, updateWishDto) {
        return this.wishService.update(id, updateWishDto);
    }
    removeOne(id, { user }) {
        return this.wishService.deleteOne(id, user.id);
    }
};
exports.WishesController = WishesController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createWishDto_1.CreateWishDto]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findLast", null);
__decorate([
    (0, common_1.Get)('top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findTop", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/copy'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "copy", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateWishDto_1.UpdateWishDto]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "removeOne", null);
exports.WishesController = WishesController = __decorate([
    (0, common_1.Controller)('wishes'),
    __metadata("design:paramtypes", [wishes_service_1.WishesService])
], WishesController);
//# sourceMappingURL=wishes.controller.js.map