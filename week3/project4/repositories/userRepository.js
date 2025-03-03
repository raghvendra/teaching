import User from '../models/user.js';

class UserRepository {
  async createUser(userData) {
    try {
      const savedUser = await User.create(userData);
      return savedUser;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error finding user: ${error.message}`);
    }
  }
}

export default new UserRepository();
