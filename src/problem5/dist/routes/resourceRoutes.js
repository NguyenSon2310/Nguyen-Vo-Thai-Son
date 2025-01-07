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
const express_1 = __importDefault(require("express"));
const resourceService_1 = require("../services/resourceService");
const resourceRepository_1 = require("../repositories/resourceRepository");
const router = express_1.default.Router();
// Initialize the ResourceService
const resourceService = new resourceService_1.ResourceService(resourceRepository_1.resourceRepository);
// Route to create a resource
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        const resource = yield resourceService.createResource({
            name,
            description,
        });
        res.status(201).json(resource);
    }
    catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
}));
// Route to list resources with filters
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.query;
        const resources = yield resourceService.listResources({
            name: name,
            description: description,
        });
        res.status(200).json(resources);
    }
    catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
}));
// Route to get a resource by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resource = yield resourceService.findResourceById(Number(id));
        res.status(200).json(resource);
    }
    catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
}));
// Route to update a resource
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedResource = yield resourceService.updateResource(Number(id), data);
        res.status(200).json(updatedResource);
    }
    catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
}));
// Route to delete a resource
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield resourceService.deleteResource(Number(id));
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
}));
exports.default = router;
//# sourceMappingURL=resourceRoutes.js.map