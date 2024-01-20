import dotenv from "dotenv";
dotenv.config();

// module.exports = {}

const envFiles = {
    port: process.env.PORT,
    db_uri: process.env.DB_URI,
    secretKey: process.env.SECRET_KEY,
};

export { envFiles };
