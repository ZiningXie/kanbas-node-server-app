import express from 'express'
import Hello from "./Hello.js"
import Lab5 from './Labs/Lab5.js'
import cors from 'cors'
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";


const app = express()
app.use(cors(      
    {
        credentials: true,
        origin: "*",
      }))
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);


// import ModuleRoutes from "./Kanbas/modules/routes.js";
// import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
// import cors from 'cors'
// AssignmentRoutes(app)
// ModuleRoutes(app)
// CourseRoutes(app)
Lab5(app)
Hello(app)
// app.listen(4000)
app.listen(process.env.PORT || 4000)