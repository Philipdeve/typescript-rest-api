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

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const { age, grade } = req.body;

    const updatedStudent = await Student.findOneAndUpdate(
      { name },
      { age, grade },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const deletedStudent = await Student.findOneAndDelete({ name });

    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    } 

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { createStudent, getAllStudents, updateStudent, deleteStudent };
