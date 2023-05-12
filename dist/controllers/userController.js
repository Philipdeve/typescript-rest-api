"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getAllStudents = exports.createStudent = void 0;
const user_1 = __importDefault(require("../models/user"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, grade } = req.body;
    try {
        const student = new user_1.default({ name, age, grade });
        const savedStudent = yield student.save();
        res.status(201).json(savedStudent);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.createStudent = createStudent;
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield user_1.default.find();
        res.json(students);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.getAllStudents = getAllStudents;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const { age, grade } = req.body;
        const updatedStudent = yield user_1.default.findOneAndUpdate({ name }, { age, grade }, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(updatedStudent);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const deletedStudent = yield user_1.default.findOneAndDelete({ name });
        if (!deletedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.deleteStudent = deleteStudent;
