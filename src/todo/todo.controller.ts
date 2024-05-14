import { RequestHandler } from "../type";
import { Todo } from "./todo.types";

type RequestBody = { text: string }
type RequestParams = { todoId: string }

const todos: Array<Todo> = [];

export const createTodoHandler: RequestHandler = (req, res, next) => {
  const body = req.body as RequestBody;
  todos.push({
    id: new Date().toISOString(),
    text: body.text,
  });
  res.status(201).json(todos);
};

export const readTodoHandler: RequestHandler = (req, res, next) => {
  res.status(200).json(todos);
};

export const updateTodoHandler: RequestHandler = (req, res, next) => {
  const body = req.body as RequestBody;
  const params = req.params as RequestParams;
  const index = todos.findIndex(todo => todo.id === params.todoId)
  todos[index].text = body.text;
  todos.splice(index, 1)
  res.status(200).json(todos);
};

export const deleteTodoHandler: RequestHandler = (req, res, next) => {
  const params = req.params as RequestParams;
  const index = todos.findIndex(todo => todo.id === params.todoId)
  todos.splice(index, 1)
  res.status(204);
};


