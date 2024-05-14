import { Router } from "express";
import {
  createTodoHandler,
  readTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
} from "./todo.controller";

const todoRouter = Router();

todoRouter.post("/todos", createTodoHandler);
todoRouter.get("/todos", readTodoHandler);
todoRouter.patch("/todos/:todoId", updateTodoHandler);
todoRouter.delete("/todos/:todoId", deleteTodoHandler);

export default todoRouter;
