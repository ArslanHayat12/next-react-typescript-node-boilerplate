import { Router } from "express";
import { getTask, saveTask } from "../../controllers";
const router = Router();

// Task API
router
  .route("/task")
  .get(getTask)
  .post(saveTask);

export const task = router;
