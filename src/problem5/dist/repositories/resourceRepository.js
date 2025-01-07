"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceRepository = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
exports.resourceRepository = {
    createResource(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.resource.create({ data });
        });
    },
    findResources(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description } = filters;
            const andWhere = [];
            if (name)
                andWhere.push({ name: { contains: filters.name } });
            if (description)
                andWhere.push({
                    description: { contains: filters.description },
                });
            return prismaClient_1.default.resource.findMany({
                where: {
                    AND: andWhere,
                },
            });
        });
    },
    findResourceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.resource.findFirst({ where: { id } });
        });
    },
    updateResource(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.resource.update({ where: { id }, data });
        });
    },
    deleteResource(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.resource.delete({ where: { id } });
        });
    },
};
//# sourceMappingURL=resourceRepository.js.map