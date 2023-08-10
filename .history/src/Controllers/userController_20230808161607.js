import User from "../Models/user.js";
const getUser = (req, res) => {
    let data = User.findAll;
    res.send(data);
}


export { getUser }
