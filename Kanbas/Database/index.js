import courses from "./courses.js";
import modules from "./modules.js";
import assignments from "./assignments.js";
import users from "./users.js";
import grades from "./grades.js";
import enrollments from "./enrollments.js";

const database = {
    courses,
    modules,
    assignments,
    users,
    enrollments,
    grades
};

// export default database;

export {
    courses,
    modules,
    assignments,
    users,
    enrollments,
    grades
};

export default { courses, modules, assignments, users, grades, enrollments };