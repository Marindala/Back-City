//install extension better comments, change colors in settings.json
//! resalta en rojo
//? hola resalta en azul
//* hola comenta en verde
const server = require('./src/app..js');
const { conn } = require('./src/db.js');
require("dotenv").config();
const {PORT} = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at', PORT); // eslint-disable-line no-console
  });
});