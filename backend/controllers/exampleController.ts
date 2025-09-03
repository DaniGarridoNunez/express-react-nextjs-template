import { Request, Response } from "express";

export const exampleFunction = async (req: Request, res: Response) => {
    res.send('Example Route');
}