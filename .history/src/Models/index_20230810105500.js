// kết nối csdl
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("db_node33", "root", "1234", {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
})


export default sequelize