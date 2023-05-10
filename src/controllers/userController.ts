import { Request, Response } from "express";
import Student from "../models/user";

const createStudent = async (req: Request, res: Response) => {
  const { name, age, grade } = req.body;
  try {
    const student = new Student({ name, age, grade });
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: "Server error" });

  }
};

export { createStudent };
