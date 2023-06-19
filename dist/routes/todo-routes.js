"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const todo_controller_1 = __importDefault(require("../controllers/todo-controller"));
const router = (0, express_1.Router)();
// Get All Todos
router.get("/", todo_controller_1.default.getTodos);
router.get("/single/:id", todo_controller_1.default.getSingleTodo);
router.post("/", [
    (0, express_validator_1.body)("title").notEmpty().withMessage("Title is required"),
    (0, express_validator_1.body)("description").notEmpty().withMessage("Description is required"),
    (0, express_validator_1.body)("completed").notEmpty().withMessage("Completed is required"),
], todo_controller_1.default.createTodo);
router.put("/complete/:id", todo_controller_1.default.updateTodo);
router.delete("/delete/:id", todo_controller_1.default.deleteTodo);
exports.default = router;
//# sourceMappingURL=todo-routes.js.map