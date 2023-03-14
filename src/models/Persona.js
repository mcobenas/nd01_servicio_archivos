import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { PersonaDoc } from "./PersonaDoc.js"


export const Persona = sequelize.define('Persona',{
    Id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
        
    },

    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    },
    
    ApelliPaterno:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
        
    },
    ApelliMaterno:{
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

Persona.hasMany(PersonaDoc,
    {
        foreignKey: 'PersonaId',
        sourceKey: 'Id'
        //allowNull: false

    }
)

PersonaDoc.belongsTo( Persona,
    {
        foreignKey: 'PersonaId',
        targetId: 'Id'
        //allowNull: false   
    }
)