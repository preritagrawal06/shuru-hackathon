import { Request, Response, Router } from "express";
import { authBody, authhValidation } from "../validations/user";
import { User, generateHash, validateHash } from "../db";
import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import { authMiddleware } from "../middleware/authMiddleware";
const router = Router();

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const payload:authBody = req.body;
    const parsedPayload = authhValidation.safeParse(payload);
    if (!parsedPayload.success) throw new Error("invalid inputs");

    const alreadyExist = await User.findOne({ email: parsedPayload.data.email });
    if (alreadyExist) throw new Error("Email already taken");

    const passHash = await generateHash(parsedPayload.data.password);
    const user = await User.create({
      email: parsedPayload.data.email,
      password: passHash,
    });

    const token = jwt.sign({ userId: user._id }, SECRET);
    return res.json({ msg: "user created successfully", token });
  } catch (error: any) {
    return res.status(400).json({ msg: error.message });
  }
});

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const payload:authBody = req.body;
    const parsedPayload = authhValidation.safeParse(payload);
    if (!parsedPayload.success) throw new Error("invalid inputs");

    const user = await User.findOne({ email: parsedPayload.data.email }).exec();
    if (!user) throw new Error("user not found");

    const isValid = await validateHash(
      parsedPayload.data.password,
      user.password
    );
    if (!isValid) return res.status(403).json({ msg: "invalid password" });
    const token = jwt.sign({ userId: user._id }, SECRET);
    return res.json({ msg: "signin successful", token });
  } catch (error: any) {
    return res.status(400).json({ msg: error.message });
  }
});

router.get("/hello", authMiddleware, (req: Request, res: Response) => {
  return res.json({ msg: "hello" });
});

export { router as userRouter };
