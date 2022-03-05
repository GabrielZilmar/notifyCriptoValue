import { NextFunction, Request, Response } from "express";

const authorizationPipe = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.body.requestTime = Date.now();

  next();
};

export default authorizationPipe;
