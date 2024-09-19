"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.deleteUser = exports.createUser = void 0;
const db_1 = require("../DB/db");
const db_query_js_1 = require("../DB/db-query.js");
const hasing_password_1 = require("../utils/hasing-password");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const takenUtils_1 = require("../utils/takenUtils");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const hashedPassword = yield (0, hasing_password_1.hashingPassword)(req.body.password);
        const password = hashedPassword;
        console.log(password);
        if (!name || !email || !password) {
            res.status(400).json({
                msg: "Please complete all the information (name,email,password)",
            });
        }
        const userid = 'abc123';
        const values = [userid, name, email, password];
        db_1.pool.query(db_query_js_1.createNewUser, values, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ msg: "Database error occurred" });
            }
            res.status(201).json({ msg: "user has been created" });
        });
    }
    catch (error) {
        res.status(500).json({ msg: "Server error occuerred" });
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const values = [id];
        db_1.pool.query(db_query_js_1.deleteUserQuery, values, (error, results) => {
            if (error)
                return error;
            res.status(200).json({ msg: "user has been deleted" });
        });
    }
    catch (error) {
        res.status(500).json({ msg: "Database error" });
    }
});
exports.deleteUser = deleteUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const values = [email];
        db_1.pool.query(db_query_js_1.findUserQuery, values, (error, results) => __awaiter(void 0, void 0, void 0, function* () {
            if (error) {
                console.log(error);
                return res.status(500).json({ msg: "Database query error occurred" });
            }
            if (results.rows.length === 0) {
                return res.status(404).json({ msg: "User not found" });
            }
            const user = results.rows[0];
            const hashedPassword = user.password;
            const isMatch = yield bcryptjs_1.default.compare(password, hashedPassword);
            if (!isMatch) {
                return res.status(400).json({ msg: "Incorrect password" });
            }
            const userid = 'abc123';
            const token = (0, takenUtils_1.createJWT)(userid);
            res.status(200).json({ token });
        }));
    }
    catch (error) {
        console.error("Server error: ", error);
        res.status(500).json({ msg: "Server error occurred" });
    }
});
exports.login = login;
//# sourceMappingURL=usersControllers.js.map