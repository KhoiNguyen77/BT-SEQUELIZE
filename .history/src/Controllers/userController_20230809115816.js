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

}

const updateUser = async (req, res) => {

}

const deleteUser = async (req, res) => {

}

export { getUser, getUserById, createUser, updateUser, deleteUser }
