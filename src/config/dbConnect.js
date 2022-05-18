import mongoose from "mongoose";

mongoose.connect("mongodb+srv://aline:232805@alura.2h2sp.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
