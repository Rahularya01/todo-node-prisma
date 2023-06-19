import { Router } from "express";
import { body } from "express-validator";
import todoController from "../controllers/todo-controller";

const router = Router();
// Get All Todos
router.get("/", todoController.getTodos);

router.get("/single/:id", todoController.getSingleTodo);

router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("completed").notEmpty().withMessage("Completed is required"),
  ],
  todoController.createTodo
);

router.put("/complete/:id", todoController.updateTodo);

router.delete("/delete/:id", todoController.deleteTodo);

export default router;
