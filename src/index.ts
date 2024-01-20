import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import { envFiles } from "./util/envFile";
import router from "./router";
// import path from "path";
// import moduleAlias from "module-alias";

// Set up aliases
// moduleAlias.addAliases({
//     "@controllers": path.join(__dirname, "src/controllers"),
//     "@db": path.join(__dirname, "db"),
//     "@helpers": path.join(__dirname, "helpers"),
//     "@router": path.join(__dirname, "router"),
//     "@util": path.join(__dirname, "util"),
//     // Add more aliases as needed
// });

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// connect database
mongoose.Promise = Promise;
mongoose.connect(envFiles.db_uri);
mongoose.connection.on("error", (error: Error) => console.log(error));
mongoose.connection.on("connected", () => {
    console.log("Connected with Database " + envFiles.db_uri);
});

// connect routes
app.use("/", router());

// create server
const server = http.createServer(app);
server.listen(envFiles.port, () => {
    console.log(`Server running on http://localhost:${envFiles.port}/`);
});
