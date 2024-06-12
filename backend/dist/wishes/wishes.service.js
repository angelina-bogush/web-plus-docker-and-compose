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
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wish_entity_1 = require("./wish.entity");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let WishesService = class WishesService {
    constructor(wishRepository, userService) {
        this.wishRepository = wishRepository;
        this.userService = userService;
    }
    async create(id, createWishDto) {
        const user = await this.userService.findUserById(id);
        return this.wishRepository.save({
            ...createWishDto,
            owner: user,
        });
    }
    async findOne(id) {
        const wish = await this.wishRepository.findOne({
            where: {
                id,
            },
            relations: ['owner', 'offers', 'offers.user'],
        });
        if (!wish)
            throw new common_1.BadRequestException('Не найдено');
        return wish;
    }
    async findTop(records) {
        return this.wishRepository.find({
            order: { copied: 'DESC' },
            take: records,
            relations: ['owner', 'offers'],
        });
    }
    async findLast(records) {
        return this.wishRepository.find({
            order: { createdAt: 'DESC' },
            take: records,
            relations: ['owner', 'offers'],
        });
    }
    async update(wishId, updateWishDto) {
        const wish = await this.findOne(wishId);
        if (!wish) {
            throw new common_1.NotFoundException('Такого подарка не существует');
        }
        if (updateWishDto.price && wish.offers.length > 0)
            throw new common_1.BadRequestException('Невозможно редактировать');
        return await this.wishRepository.update(wishId, updateWishDto);
    }
    async deleteOne(wishId, userId) {
        const wish = await this.findOne(wishId);
        if (wish.owner.id !== userId) {
            throw new common_1.BadRequestException('Вы не можете удалять чужие подарки');
        }
        await this.wishRepository.delete(wishId);
        return wish;
    }
    async copy(wishId, userId) {
        const { id, copied, ...data } = await this.findOne(wishId);
        const owner = await this.userService.findUserById(userId);
        await this.wishRepository.update(id, { copied: copied + 1 });
        return this.wishRepository.save({
            ...data,
            owner,
        });
    }
    find(giftsId) {
        return this.wishRepository.find({
            where: { id: (0, typeorm_2.In)(giftsId) },
        });
    }
};
exports.WishesService = WishesService;
exports.WishesService = WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], WishesService);
//# sourceMappingURL=wishes.service.js.map