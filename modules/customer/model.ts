import { Schema, model } from 'mongoose';

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

const customerSchema = new Schema<ICustomer>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName:  { type: String, required: true, trim: true },
    email:     { type: String, required: true, unique: true, lowercase: true },
    phone:     { type: String, required: true },
  },
  { timestamps: true }
);

export default model<ICustomer>('Customer', customerSchema);
