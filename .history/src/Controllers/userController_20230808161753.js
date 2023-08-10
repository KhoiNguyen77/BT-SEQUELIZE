import User from "../Models/user.js";
const getUser = async (req, res) => {
    let data = await User.findAll();
    res.send(data);
}


export { getUser }
