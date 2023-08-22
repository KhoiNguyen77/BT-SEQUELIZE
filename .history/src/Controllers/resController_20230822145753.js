import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op;
const model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body;
        let date_like = new Date();
        await model.like_res.create({ user_id, res_id, amount, date_like })
        res.send("Bạn đã like nhà hàng")
    } catch {
        res.status(400).send("Không được đánh giá 2 lần")
    }
}


const listLike = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await model.restaurant.findAll({
            include: ["user_id_users"],
            where: {
                res_id: id
            }
        })
        res.send(data)
    } catch {
        res.status(500).send("Lỗi BE");
    }
}

const listRate = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await model.restaurant.findAll({
            include: ["user_id_user_rate_res"],
            where: {
                res_id: id,
            }
        })
        res.send(data)
    } catch {
        res.status(500).send("Lỗi BE");
    }
}

export { likeRestaurant, listLike, listRate }