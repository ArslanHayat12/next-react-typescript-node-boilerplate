import { Router, Request, Response } from "express";
// import { validateToken } from "../../utils";
const userRouter = Router();

// USER API
userRouter
  .route("/user")

  //Get Request
  .get(async (req: Request, res: Response) => {
    return res.send([{ name: "User 1" }]);
  })

  //Post Request
  .post(async (req: Request, res: Response) => {
    if (req.body) {
      return res.send(JSON.stringify(req.body, null, 3));
    }
    return res.send("Post User ");
  });

export const user = userRouter;
