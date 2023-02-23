const cors = require('cors'); //requires the cors module, which is used to config server.headers
const express = require("express");  // requires the Express library, which is used to create a web server.
const mongoose = require("mongoose") // requires the Mongoose library  -- which is used to connect to a MongoDB database.

require ("dotenv").config()


const app = express();//Uses the Express library to create the server

// which is used to connect to a MongoDB database.
const Routes = require("./src/Routes/routes"); //requires the Routes file to management your endpoints

const connectionOptions = { //configure your options to connect to mongodb
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json()); //Used to parse incoming or transform requests with JSON loads

const corsOption={ //config your cors options to acept request with front-end
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

app.use(cors(corsOption)); //start cors with your config options



//connect to mongo atlas(cluster) > <your db> > <your collection>
mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongoURL,connectionOptions).then(()=> console.log("Conexion exitosa")).catch((err)=> console.error(err));

//Define your path to consult using your endpoint file
app.use("/App", Routes);

//start your server in port 3020
app.listen(process.env.port, ()=>{
  console.log("Conexión exitosa al puerto ");
})
