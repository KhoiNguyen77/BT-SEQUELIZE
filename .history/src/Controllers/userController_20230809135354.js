import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);
const getUser = async (req, res) => {
    let data = await model.user.findAll(
        {
            where: {
                user_id: 1
            }
        }
    );
    let data2 = await model.user.findOne();
    res.send(data2);
}
//  CRUD
// Read ==> Get by id
const getUserById = async (req, res) => {

    let { id } = req.params;
    let data2 = await model.user.findOne(
        {
            where: {
                user_id: id
            }
        }
    );
    res.send(data2);
}
//  CUD

const createUser = async (req, res) => {
    let { full_name, email, pass_word } = req.body
    await model.user.create();
    res.send("Thêm mới thành công")
}

const updateUser = async (req, res) => {
    let { id } = req.params;
    let { full_name, email, pass_word } = req.body
    await model.user.update({ full_name, email, pass_word }, {
        where: {
            user_id: id
        }
    })
    res.send("Thêm mới thành công")
}

const deleteUser = async (req, res) => {
    let { id } = req.params;
    let { full_name, email, pass_word } = req.body
    await model.user.destroy({ full_name, email, pass_word }, {
        where: {
            user_id: id
        }
    })
    res.send("Thêm mới thành công")
}

export { getUser, getUserById, createUser, updateUser, deleteUser }
