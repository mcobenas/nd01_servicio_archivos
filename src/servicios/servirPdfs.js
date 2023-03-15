//const http = require('http'); 
//const fs = require('fs'); 

import http from "http";
import fs from "fs";

export const servidor = http.createServer((req, res) => 
{ 
// Obtiene el nombre del archivo PDF desde la URL de la solicitud 
const fileName =req.url.slice(1,1000); // Lee el archivo PDF del sistema de archivos

console.log(`./src/pdfs/${fileName}`);

fs.readFile(`./src/pdfs/${fileName}`, (err, data) => { 
    if (err) 
    {
        console.log(err);
        // Si hay un error al leer el archivo, envía un mensaje de error 
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al leer el archivo'); 
    } else { 
    // Si el archivose ha leído correctamente, envía el contenido del archivo como respuesta 
    res.writeHead(200, { 'Content-Type':'application/pdf' }); 
    res.end(data); } }
    ); 
});

 
