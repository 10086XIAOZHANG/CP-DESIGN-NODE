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
var typeorm_1 = require("typeorm");
// @Entity()
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ unique: true }),
        __metadata("design:type", String)
    ], BaseEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], BaseEntity.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseEntity.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({ select: false }),
        __metadata("design:type", String)
    ], BaseEntity.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ select: false }),
        __metadata("design:type", Number)
    ], BaseEntity.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({ select: false }),
        __metadata("design:type", String)
    ], BaseEntity.prototype, "deletedBy", void 0);
    __decorate([
        typeorm_1.Column({ select: false }),
        __metadata("design:type", Number)
    ], BaseEntity.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.Column({
            select: false,
            default: 0
        }),
        __metadata("design:type", Number)
    ], BaseEntity.prototype, "version", void 0);
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=baseEntity.js.map