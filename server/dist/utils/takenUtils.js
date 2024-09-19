"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWT = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, "secret", {
        expiresIn: "1d",
    });
    return token;
};
exports.createJWT = createJWT;
//# sourceMappingURL=takenUtils.js.map