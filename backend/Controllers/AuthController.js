 // Adjust path if necessary
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/UserModel.js';

const SECRET_KEY = 'your_secret_key'; // Replace with an environment variable in production

export const signup = async (req, res) => {
  const { FirstName, LastName, email, password, role } = req.body;

  try {
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      FirstName,
      LastName,
      email,
      password: hashedPassword,
      role,
    });

    // Generate a token
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(201).json({ user: { id: user._id, email: user.email, role: user.role }, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error });
  }
};

// Login controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ user: { id: user._id, email: user.email, role: user.role }, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.user; 

  try {
    const user = await User.findById(id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error });
  }
};
