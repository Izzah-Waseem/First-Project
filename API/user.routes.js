
import express from "express";
const router = express.Router();
import { createUser, getAllUsers,getUserById, updateUser, deleteUser} from './user.controller.js';

// Route to create a new user
router.post('/', createUser);

// Route to get all users
router.get('/', getAllUsers);

// Route to get a single user by ID
router.get('/:id', getUserById);

// Route to update a user by ID
router.put('/:id', updateUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

export default router;
