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
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const wishlist_entity_1 = require("./wishlist.entity");
const users_service_1 = require("../users/users.service");
const wishes_service_1 = require("../wishes/wishes.service");
let WishlistsService = class WishlistsService {
    constructor(wishlistRepository, usersService, wishService) {
        this.wishlistRepository = wishlistRepository;
        this.usersService = usersService;
        this.wishService = wishService;
    }
    find() {
        return this.wishlistRepository.find({
            relations: ['owner', 'items'],
        });
    }
    async create(createWishlistDto, userId) {
        const user = await this.usersService.findUserById(userId);
        const wishes = await this.wishService.find(createWishlistDto.itemsId);
        return this.wishlistRepository.save({
            ...createWishlistDto,
            owner: user,
            items: wishes,
        });
    }
    async findOne(id) {
        const wishlist = await this.wishlistRepository.findOne({
            where: { id },
            relations: ['owner', 'items'],
        });
        if (!wishlist) {
            throw new common_1.NotFoundException('Вишлист не найден');
        }
        return wishlist;
    }
    async update(id, updateWishlistDto, userId) {
        const wishlist = await this.findOne(id);
        if (wishlist.owner.id !== userId) {
            throw new common_1.ForbiddenException('Вы не можете менять чужие Вишлисты');
        }
        if (updateWishlistDto.itemsId) {
            const wishes = await this.wishService.find(updateWishlistDto.itemsId);
            wishlist.items.push(...wishes);
            await this.wishlistRepository.save(wishlist);
            await this.wishlistRepository.update(id, updateWishlistDto);
        }
        else {
            await this.wishlistRepository.update(id, updateWishlistDto);
        }
        return wishlist;
    }
    async deleteOne(wishId, userId) {
        const wishlist = await this.findOne(wishId);
        if (wishlist.owner.id !== userId) {
            throw new common_1.ForbiddenException('Вы не можете удалить вишлисты других пользователей');
        }
        await this.wishlistRepository.delete(wishId);
        return wishlist;
    }
};
exports.WishlistsService = WishlistsService;
exports.WishlistsService = WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.WishList)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        wishes_service_1.WishesService])
], WishlistsService);
//# sourceMappingURL=wishlists.service.js.map