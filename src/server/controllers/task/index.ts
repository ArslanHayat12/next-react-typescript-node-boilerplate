import { Router, Response, Request } from "express";
const taskRouter = Router();

// Task API
taskRouter
  .route("/task")

  //Get Request
  .get(async (req: Request, res: Response) => {
    return res.send([{ name: "Task 1" }]);
  })

  //Post Request
  .post(async (req: Request, res: Response) => {
    if (req.body) {
      return res.send(JSON.stringify(req.body, null, 3));
    }
    return res.send("Post Task! ");
  });

export const task = taskRouter;
