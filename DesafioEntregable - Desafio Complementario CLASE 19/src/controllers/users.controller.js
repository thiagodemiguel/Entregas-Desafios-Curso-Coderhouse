import { usersService } from "../services/users.service.js"
import { verifyToken } from "../utils.js";

import CustomeError from "../errors/custome-error.js";
import { ErrorMessages } from "../errors/error.enum.js";

class UsersController {
  findAllUser = async (req, res) => {
    try {
      const result = await usersService.findAll();
      res.status(200).json({ users: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  findUserById = async (req, res) => {
    const { idUser } = req.params;
    try {
      const result = await usersService.findById(idUser);
      res.status(200).json({ user: result });
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { first_name, last_name, email, password } = req.body;
      if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: "All data is required" });
      }
      const result = await usersService.createOne(req.body);
      res.status(200).json({ user: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  changeRole = async (req, res) => {
    try {
      const {uid} = req.params;

      const result = await usersService.changeRole(uid);
      res.status(200).json({ user: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  findByEmail = async (req, res) => {
    try {
      const {email} = req.params;
      if (!email) {
        return res.status(400).json({ message: "User not exist" });
      }
      const result = await usersService.findByEmail(email);
      if(!result) throw new Error();
      return res.status(200).json({ message: "User found", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { idUser } = req.params;
      const result = await usersService.deleteOne(idUser);
      return res.status(200).json({ message: "User delete", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      await usersService.forgotPassword(email);
      return res.status(200).json({ message: "The link has been sent to your email" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { password } = req.body;
      const { email } = verifyToken(token);
      
      await usersService.resetUserPassword(email, password);

      return res.status(200).json({ message: "Password change" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


}

export const usersController = new UsersController();