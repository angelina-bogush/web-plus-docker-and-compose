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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const offer_entity_1 = require("./offer.entity");
const users_service_1 = require("../users/users.service");
const wishes_service_1 = require("../wishes/wishes.service");
let OffersService = class OffersService {
    constructor(offerRepository, usersService, wishesService) {
        this.offerRepository = offerRepository;
        this.usersService = usersService;
        this.wishesService = wishesService;
    }
    async create(createOfferDto, userId) {
        const user = await this.usersService.findUserById(userId);
        const wish = await this.wishesService.findOne(createOfferDto.itemId);
        if (user.id === wish.owner.id) {
            throw new common_1.ForbiddenException('Вы не можете скидывать деньги на свои подарки');
        }
        if (wish.price - wish.raised < createOfferDto.amount) {
            throw new common_1.ForbiddenException('Вы не можете предложить сумму больше стоимости подарка');
        }
        await this.wishesService.update(createOfferDto.itemId, {
            raised: Number(wish.raised) + Number(createOfferDto.amount),
        });
        return this.offerRepository.save({ ...createOfferDto, user, item: wish });
    }
    async findOfferById(id) {
        const offer = await this.offerRepository.findOne({ where: { id } });
        if (!offer) {
            throw new common_1.NotFoundException(`Предложение с таким id ${id} не найдено.`);
        }
        return offer;
    }
    async find() {
        const offers = await this.offerRepository.find({
            relations: ['user', 'item'],
        });
        offers.forEach((offer) => {
            if (offer.user) {
                delete offer.user.password;
            }
        });
        return offers;
    }
};
exports.OffersService = OffersService;
exports.OffersService = OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        wishes_service_1.WishesService])
], OffersService);
//# sourceMappingURL=offers.service.js.map