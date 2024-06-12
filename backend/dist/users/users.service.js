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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.salt = 10;
    }
    async create(createUserDTO) {
        const user = await this.userRepository.find({
            where: [
                { username: createUserDTO.username },
                { email: createUserDTO.email },
            ],
        });
        if (user.length) {
            throw new common_1.ConflictException('Пользователь с таким email или username уже зарегистрирован');
        }
        createUserDTO.password = await bcrypt.hash(String(createUserDTO.password), this.salt);
        return await this.userRepository.save({
            ...createUserDTO,
            offers: [],
            wishes: [],
            wishlists: [],
        });
    }
    async findOne(search) {
        return this.userRepository.findOne({
            where: [{ email: search }, { username: search }],
        });
    }
    async findUserById(id) {
        const { password, ...user } = await this.userRepository.findOne({
            where: { id },
        });
        if (!user && !password) {
            throw new common_1.NotFoundException('Такого пользователя не существует');
        }
        return user;
    }
    async findUsers(query) {
        return await this.userRepository.find({
            where: [{ username: query }, { email: query }],
        });
    }
    async update(id, updateUserDto) {
        const user = await this.findUserById(id);
        if (updateUserDto.username && updateUserDto.username !== user.username) {
            const isUsernameValid = await this.findOne(updateUserDto.username);
            if (isUsernameValid)
                throw new common_1.ConflictException('Пользователь с таким именем уже зарегистрирован');
        }
        if (updateUserDto.email && updateUserDto.email !== user.email) {
            const isEmailValid = await this.findOne(updateUserDto.email);
            if (isEmailValid)
                throw new common_1.ConflictException('Пользователь с таким email уже зарегистрирован');
        }
        if (updateUserDto.password) {
            updateUserDto.password = await bcrypt.hash(String(updateUserDto.password), this.salt);
        }
        await this.userRepository.update(id, updateUserDto);
        return this.findUserById(id);
    }
    async findWishes(username) {
        const user = this.findOne(username);
        if (!user) {
            throw new common_1.NotFoundException('Пользователя не существует');
        }
        const { wishes } = await this.userRepository.findOne({
            where: { username },
            relations: ['wishes', 'wishes.owner', 'wishes.offers'],
            select: ['wishes'],
        });
        return wishes;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map