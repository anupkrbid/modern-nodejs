import express from "express"
import bodyParser from "body-parser"

import { todoRoutes } from "./todo"


const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(todoRoutes)

app.listen(3000)