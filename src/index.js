import app from "./app.js"
import {sequelize} from './database/database.js'
import "./models/Persona.js"
import "./models/PersonaDoc.js"
import {servidor} from './servicios/servirPdfs.js'

async function main() {
    
    try {
        //await sequelize.sync({force:true});
        //await sequelize.authenticate();
        //console.log('Connection has been established successfully.');

        //app.listen(3000);
        //console.log('Server is listening on port ', 3000);

        servidor.listen(4000, () => { console.log('Servidor escuchando en el puerto 4000'); });

       
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        
    }
    
}
main();