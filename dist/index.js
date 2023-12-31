"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
// Routes
const todo_routes_1 = __importDefault(require("./routes/todo-routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).send("Running Perfectly");
});
app.use("/todo", todo_routes_1.default);
app.listen(4000, () => {
    console.log("Server is running on PORT 4000");
});
//# sourceMappingURL=index.js.map