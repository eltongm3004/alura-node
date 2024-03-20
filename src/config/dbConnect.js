import mongoose from "mongoose"

mongoose.connect("mongodb+srv://eltongm:123@cluster0.tuilkkn.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;