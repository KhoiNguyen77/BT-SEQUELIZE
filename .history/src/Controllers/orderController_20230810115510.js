import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op;
const model = initModels(sequelize);

const order = async (req, res) => {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    await model.order.create({ user_id, food_id, amount, code, arr_sub_id });
    res.send("Thêm mới thành công");
}
export { order }