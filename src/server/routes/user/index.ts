import { Router } from "express";
import { getUser, saveUser } from "../../controllers";
import { validateToken } from "../../utils";
const router = Router();

// USER API
router
  .route("/user")
  .get(validateToken, getUser)
  .post(saveUser);
export const user = router;
