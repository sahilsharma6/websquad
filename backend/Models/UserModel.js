import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },

    LastName: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Invalid email format'], // Added custom error message
    },
    password: {
      type: String,
      required: true,
      select: false, // Hide the password by default
      minlength: 6, // Password length requirement
    },  
    role: {
      type: String,
      enum: ['Employee', 'admin'],
      default: 'Employee',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
