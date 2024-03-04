"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const database_service_1 = require("./database.service");
const database_controller_1 = require("./database.controller");
dotenv.config();
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.TYPEORM_CONNECTION,
                host: process.env.TYPEORM_HOST,
                port: parseInt(process.env.TYPEORM_PORT),
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                sid: process.env.TYPEORM_SID,
                serviceName: process.env.TYPEORM_SERVICE_NAME,
                autoLoadEntities: true,
                synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
                namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy()
            }),
        ],
        controllers: [database_controller_1.DatabaseController],
        providers: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map