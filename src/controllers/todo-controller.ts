import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { prisma } from "../lib/utils";

const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    return res.status(200).json({ todos });
  } catch (error) {
    return res.json(error);
  }
};

const createTodo = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const todoPayload = req.body;
  try {
    const todo = await prisma.todo.create({
      data: todoPayload,
    });
    return res.status(200).json({
      todo,
      message: "Todo Created Successfully",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const todo = await prisma.todo.update({
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
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({
      todo,
      message: "Todo Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findMany({
      where: {
        id,
      },
    });

    return res.status(200).json({
      todo,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export default { getTodos, createTodo, updateTodo, deleteTodo, getSingleTodo };
