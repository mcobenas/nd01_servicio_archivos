import { DataTypes } from "sequelize";
import{sequelize} from "../database/database.js";

export const PersonaDoc= sequelize.define('PersonaDoc',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    docTipo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    docNumeroc: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    fecRegistro:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "01/01/1900"
        
    },
    
    responsable:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    },
    maquina:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    },
    ip:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    }
    //timestamps: false

});

