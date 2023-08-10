import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op;
const model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
    try {
        let { id } = req.params;
        let { user_id } = req.body;
        let date_like = new Date();
        await model.like_res.create({ user_id, id, date_like })
        res.send("Bạn đã like nhà hàng")
    } catch {

    }
}

export { likeRestaurant }