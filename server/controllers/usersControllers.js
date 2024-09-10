import { pool } from "../DB/db.js";
import {
  createNewUser,
  deleteUserQuery,
  findUserQuery,
} from "../DB/db-query.js";
import { nanoid } from "nanoid";
import { hashingPassword } from "../utils/hasing-password.js";
import bcrypt from "bcryptjs";
import { createJWT } from "../utils/takenUtils.js";

export const createUser = async (req, res) => {
  try {
    const { name, email} = req.body;
    const hashedPassword = await hashingPassword(req.body.password);
    const password = hashedPassword;
    console.log(password);
    if (!name || !email || !password) {
      res.status(400).json({
        msg: "Please complete all the information (name,email,password)",
      });
    }
    const userID = nanoid();
    const values = [userID, name, email, password];
    pool.query(createNewUser, values, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ msg: "Database error occurred" });
      }
      res.status(201).json({ msg: "user has been created" });
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error occuerred" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const values = [id];
    pool.query(deleteUserQuery, values, (error, results) => {
      if (error) return error;
      res.status(200).json({ msg: "user has been deleted" });
    });
  } catch (error) {
    res.status(500).json({ msg: "Database error" });
  }
};
export const login = async (req, res) => { 
  try {
    const { email, password } = req.body;
    const values = [email];

    pool.query(findUserQuery, values, async (error, results) => {
      if (error) {
        return res.status(500).json({ msg: "Database query error occurred" });
      }
      if (results.rows.length === 0) {
        return res.status(404).json({ msg: "User not found" });
      }
      const user = results.rows[0];
      const hashedPassword = user.password;
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect password" });
      }
      const token = createJWT({userID:user.userid})
      res.status(200).json({token});
    });
  } catch (error) {
    console.error("Server error: ", error);
    res.status(500).json({ msg: "Server error occurred" });
  }
};
