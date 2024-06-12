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
exports.WishList = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const wish_entity_1 = require("../wishes/wish.entity");
const user_entity_1 = require("../users/user.entity");
let WishList = class WishList {
};
exports.WishList = WishList;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WishList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 250 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(250),
    __metadata("design:type", String)
], WishList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1500 }),
    (0, class_validator_1.MaxLength)(1500),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], WishList.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => wish_entity_1.Wish, (wish) => wish.id),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], WishList.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.wishlists),
    __metadata("design:type", user_entity_1.User)
], WishList.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WishList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WishList.prototype, "updatedAt", void 0);
exports.WishList = WishList = __decorate([
    (0, typeorm_1.Entity)()
], WishList);
//# sourceMappingURL=wishlist.entity.js.map