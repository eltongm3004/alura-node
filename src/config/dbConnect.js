import mongoose from "mongoose"

mongoose.connect("mongodb+srv://eltongm:123@alura.z3e8un7.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;