import crypto from "crypto";
import { envFiles } from "../util/envFile";
export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac("sha256", [salt, password].join("/")).update(envFiles.secretKey).digest("hex");
};
