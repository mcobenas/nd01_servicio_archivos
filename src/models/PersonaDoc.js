import { DataTypes } from "sequelize";
import{sequelize} from "../database/database.js";

export const PersonaDoc= sequelize.define('PersonaDoc',{
    Id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    DocTipo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    DocNumeroc: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    FechRegistro:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "01/01/1900"
        
    },
    
    UsuarioRegistro:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    },
    MaquinaRegistro:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    },
    IPRegistro:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    }
    
},
{
    timestamps: false
}
);