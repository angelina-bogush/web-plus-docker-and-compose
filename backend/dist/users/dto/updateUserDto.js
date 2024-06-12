"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createUserDto_1 = require("./createUserDto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(createUserDto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=updateUserDto.js.map