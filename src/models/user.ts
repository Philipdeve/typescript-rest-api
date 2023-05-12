import { Schema, model, Document } from 'mongoose';

interface IStudent extends Document {
  name: string;
  age: number;
  grade: string;
}

const studentSchema = new Schema<IStudent>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

const Student = model<IStudent>('Student', studentSchema);

export default Student;
