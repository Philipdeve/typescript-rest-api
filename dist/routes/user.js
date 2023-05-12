"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.route('/students').post(userController_1.createStudent);
router.route('/students').get(userController_1.getAllStudents);
router.route('/students/:name').put(userController_1.updateStudent);
router.route('/students/:name').delete(userController_1.deleteStudent);
exports.default = router;
