import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'ApiGeneral','sa','123456',
    {
        host: 'localhost',
        dialect: 'mssql'

    }
)