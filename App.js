import express from 'express'
import Hello from "./Hello.js"
import Lab5 from './Labs/Lab5.js'
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
// import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json());
// AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app)
Lab5(app)
Hello(app)
app.listen(4000)
// app.listen(process.env.PORT || 4000)