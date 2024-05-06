// Modelo de Producto
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    body: String
})

const userSchema = new mongoose.Schema({
    name: String,
    email:  String,
    password:  String,
    posts: [ postSchema ] // Es una de esquemas Post
})

const User = mongoose.model('User', userSchema);

export default User