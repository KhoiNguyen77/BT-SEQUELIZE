// DAO
// Mapping với table trong CSDL

import { DataTypes, Model } from "sequelize";
class User extends Model {

}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    full_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    pass_word: { type: DataTypes.STRING }

}, {})