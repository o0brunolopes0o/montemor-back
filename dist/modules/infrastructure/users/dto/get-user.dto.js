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
exports.GetUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetUserDto {
}
exports.GetUserDto = GetUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "ID do usuário", example: "c77845fe-4519-44b0-9edf-69816cf8ab89" }),
    __metadata("design:type", String)
], GetUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nome do usuário", example: "Nome do Usuário" }),
    __metadata("design:type", String)
], GetUserDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Email do usuário", example: "usuario@email.com" }),
    __metadata("design:type", String)
], GetUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Senha do usuário", example: "senhaSegura123" }),
    __metadata("design:type", String)
], GetUserDto.prototype, "senha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Data de criação do usuário", example: "2024-03-04T04:37:36.676Z" }),
    __metadata("design:type", Date)
], GetUserDto.prototype, "criado_em", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Data de deleção do usuário", example: null }),
    __metadata("design:type", Date)
], GetUserDto.prototype, "deletado_em", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Data de atualização do usuário", example: "2024-03-04T04:37:36.676Z" }),
    __metadata("design:type", Date)
], GetUserDto.prototype, "atualizado_em", void 0);
//# sourceMappingURL=get-user.dto.js.map