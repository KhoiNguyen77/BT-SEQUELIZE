import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op;
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
    try {
        let { id } = req.params;
        let data2 = await model.user.findOne(
            {
                where: {
                    user_id: id
                }
            }
        );
        res.send(data2);
    } catch {
        res.status(500).send("Lỗi BE");
    }

}
//  CUD

const createUser = async (req, res) => {
    try {
        let { full_name, email, pass_word } = req.body
        await model.user.create();
        res.send("Thêm mới thành công")
    } catch {
        res.status(500).send("Lỗi BE");
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let { full_name, email, pass_word } = req.body
        await model.user.update({ full_name, email, pass_word }, {
            where: {
                user_id: id
            }
        })
        res.send("Thêm mới thành công")
    } catch {
        res.status(500).send("Lỗi BE");
    }


}

const deleteUser = async (req, res) => {
    let { id } = req.params;
    await model.user.destroy({
        where: {
            user_id: id
        }
    })
    res.send("Thêm mới thành công")
}

const getUserByName = async (req, res) => {
    let { fullName } = req.params;
    let data = await model.user.findAll({
        where: {
            full_name: {
                [Op.like]: `%${fullName}%`
            }
        }
    });

    res.send(data)
}

const order = async (req, res) => {
    let { user_id, food_id, amount, code, arr_sub_id } = req.params;
    let data = await model.user.create({ user_id, food_id, amount, code, arr_sub_id });
    res.send("Thêm mới thành công");
}
export { getUser, getUserById, createUser, updateUser, deleteUser, getUserByName }
