import { NextFunction, Request, Response } from "express";
import { SECRET } from "../config";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader || !tokenHeader.startsWith("Bearer"))
      throw new Error("Unauthorized, invalid token");
    const token = tokenHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, SECRET) as { email: string };
    req.headers.email = decodedToken.email;
    next();
  } catch (error: any) {
    return res.status(403).json({ msg: error.message });
  }
};
