import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op;
const model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
    try {
        let { user_id, res_id, date_like } = req.body;
        await model.like_res.create({ user_id, res_id, date_like })
        res.send("Bạn đã like nhà hàng")
    } catch {

    }
}

export { likeRestaurant }