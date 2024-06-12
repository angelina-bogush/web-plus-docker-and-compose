"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWishDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createWishDto_1 = require("./createWishDto");
class UpdateWishDto extends (0, mapped_types_1.PartialType)(createWishDto_1.CreateWishDto) {
}
exports.UpdateWishDto = UpdateWishDto;
//# sourceMappingURL=updateWishDto.js.map