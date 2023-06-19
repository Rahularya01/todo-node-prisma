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
const express_validator_1 = require("express-validator");
const utils_1 = require("../lib/utils");
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield utils_1.prisma.todo.findMany();
        return res.status(200).json({ todos });
    }
    catch (error) {
        return res.json(error);
    }
});
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const todoPayload = req.body;
    try {
        const todo = yield utils_1.prisma.todo.create({
            data: todoPayload,
        });
        return res.status(200).json({
            todo,
            message: "Todo Created Successfully",
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const todo = yield utils_1.prisma.todo.update({
            where: {
                id,
            },
            data: {
                title,
                completed,
                description,
            },
        });
        return res.status(200).json({
            todo,
            message: "Todo Updated Successfully",
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield utils_1.prisma.todo.delete({
            where: {
                id,
            },
        });
        return res.status(200).json({
            todo,
            message: "Todo Deleted Successfully",
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
const getSingleTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield utils_1.prisma.todo.findMany({
            where: {
                id,
            },
        });
        return res.status(200).json({
            todo,
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.default = { getTodos, createTodo, updateTodo, deleteTodo, getSingleTodo };
//# sourceMappingURL=todo-controller.js.map