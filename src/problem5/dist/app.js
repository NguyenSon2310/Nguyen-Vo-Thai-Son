"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resourceRoutes_1 = __importDefault(require("./routes/resourceRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/resources", resourceRoutes_1.default);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map