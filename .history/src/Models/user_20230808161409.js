// DAO
// Mapping với table trong CSDL

import { DataTypes, Model } from "sequelize";
import sequelize from "./index.js";
class User extends Model {

}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING
        // Nếu có trường field thì sẽ dùng thuộc tính field map 
    },
    email: {
        type: DataTypes.STRING
    },
    pass_word: {
        type: DataTypes.STRING
    }

}, {
    sequelize,
    modelName: "User",
    tableName: "user",
    timestamps: false
})

export default User