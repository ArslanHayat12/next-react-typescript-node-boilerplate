import { Request, Response } from "express";

/**
 * Post /task
 * Save Task.
 */
export const saveTask = async (req: Request, res: Response) => {
  if (req.body) {
    return res.send(JSON.stringify(req.body, null, 3));
  }
  return res.send("Post Task! ");
};

/**
 * Get /task
 * Get task.
 */
export const getTask = async (req: Request, res: Response) => {
  return res.send("Get Task API Method Called");
};
