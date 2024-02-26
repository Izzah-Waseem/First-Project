import mongoose from 'mongoose';

// Define User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Export User Model
export default User;
