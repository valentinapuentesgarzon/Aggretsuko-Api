const express = require("express");  // requires the Express library, which is used to create a web server.
const mongoose = require("mongoose") // requires the Mongoose library  -- which is used to connect to a MongoDB database.
const port = 3020;
const app = express();//Uses the Express library to create the server

const cors = require('cors'); //requires the cors module, which is used to config server.headers

// which is used to connect to a MongoDB database.
const Routes = require("./src/Routes/routes"); //requires the todoRoutes file,ENDPOINST


const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json()); //Used to parse incoming or transform requests with JSON loads


app.use(cors());

const use="Valen97";
const password='oKRU0PVEjskee8JC';
const dbname='Aggretsuko';

const url = `mongodb+srv://${use}:${password}@cluster0.cae4ogm.mongodb.net/${dbname}`;

//connect to mongo atlas(cluster) > todo(db) > todos (collection)
mongoose.set("strictQuery", false);
mongoose.connect(url,connectionOptions).then(()=>console.log("Conexion exitosa")).catch((err)=> console.error(err));

app.use("/App", Routes);


app.listen(port, ()=>{
  console.log("mi puerto es: "+ port);
})
