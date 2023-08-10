import User from "../Models/user.js";
const getUser = (req, res) => {
    let data = User.findAll();
    res.send("get người dùng");
}


export { getUser }
