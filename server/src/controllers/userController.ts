import { Request, Response } from "express";

const helloUser = async (req: Request, res: Response) => {
  await res.send("Hellou World");
};

export { helloUser };
