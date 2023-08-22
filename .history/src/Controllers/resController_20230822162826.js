import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op;
const model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        let date_like = new Date();
        await model.like_res.create({ user_id, res_id, date_like })
        res.send("Bạn đã like nhà hàng thành công")
    } catch (err) {
        res.status(400).send(err)
    }
}

const deleteLike = async (req, res) => {
    try {
        let { user_id, res_id } = req.body
        await model.like_res.destroy({
            where: {
                user_id,
                res_id
            }
        })
        res.send("Unlike thành công");
    } catch (err) {
        res.send(err);
    }
}

const rateRestaurant = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body;
        if (amount <= 5) {
            let date_rate = new Date();
            await model.rate_res.create({ user_id, res_id, amount, date_rate })
            res.send("Bạn đã đánh giá nhà hàng thành công")
        } else {
            res.send("Đánh giá không được lớn hơn 5");
        }

    } catch (err) {
        res.status(400).send(err)
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

export { likeRestaurant, listLike, listRate, rateRestaurant, deleteLike }