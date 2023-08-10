import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
const getUser = async (req, res) => {
    let data = await User.findAll(
        {
            where: {
                user_id: 1
            }
        }
    );
    let data2 = await User.findOne();
    res.send(data);
}


export { getUser }
