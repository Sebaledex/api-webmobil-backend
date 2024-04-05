import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthday: { type: String, required: true, match: /^(\d{2})\/(\d{2})\/(\d{4})$/ },
  },
  { timestamps: true },
);

UserSchema.index({ username: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });
