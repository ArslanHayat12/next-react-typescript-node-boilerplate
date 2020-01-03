import { Router } from "express";
import { getUser, saveUser, getTask, saveTask } from "../controllers";
const router = Router();

//USER API
router
  .route("/user")
  .get(getUser)
  .post(saveUser);

// Task API
router
  .route("/task")
  .get(getTask)
  .post(saveTask);

export default router;
