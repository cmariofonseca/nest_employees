import { Document } from 'mongoose';

export interface Employee extends Document {
  readonly name: string;
  readonly position: string;
  readonly office: string;
  readonly salary: number;
}
