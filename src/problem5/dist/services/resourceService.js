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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
class ResourceService {
    constructor(repository) {
        this.repository = repository;
    }
    createResource(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.createResource(data);
        });
    }
    listResources(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findResources(filters);
        });
    }
    findResourceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = yield this.repository.findResourceById(id);
            if (!resource)
                throw new Error("Resource not found");
            return resource;
        });
    }
    updateResource(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.updateResource(id, data);
        });
    }
    deleteResource(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.deleteResource(id);
        });
    }
}
exports.ResourceService = ResourceService;
//# sourceMappingURL=resourceService.js.map