import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op;
const model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
    try {
        let { id } = req.params;
        let { user_id, date_like } = req.body;

        await model.like_res.create({ user_id, id, date_like })
        res.send("Like thành công")
    } catch {

    }
}

export { likeRestaurant }