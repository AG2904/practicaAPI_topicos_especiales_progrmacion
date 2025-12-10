import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = () => {
 const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
 } = process.env

 const mongoUri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

 mongoose.connect(mongoUri).then(function () {
    console.log(" MongoDB is connected");
 })
 .catch(function (err){
    console.log(err);
  })
}
const app = express()

const port = 3005
app.use(cors({ origin: '*' })) // cors
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false }))

app.listen(port, function () {
    connectDB();
    console.log(`Api corriendo en http://localhost:${port}!`)
});

app.get('/', (req, res) => {
    console.log("Mi primer endpoint");
    res.status(200).send('Hola, la API está funcionando correctamente');
});

app.post('/', async (req, res) => {
   try{
    var data = req.body;

    var newUser = new User(data);
    await newUser.save();
    res.status(200).send({
        succsess: true,
        message: 'Se resigtró el usuario',
        outcome: []
    });

   }catch(err){
     res.status(500).send({
        success: false,
        message: err.message || 'Error al registrar el usuario, por favor intente de nuevo',
        outcome: []
     })
   }
});

app.get('/users', async (req, res) => {
  try{
      var usuarios = await User.find().exec();

    res.status(200).send({
        succsess: true,
        message: 'Se obtuvieron los usuarios',
        outcome: [usuarios]  
     });
    }catch(err){
      res.status(500).send({
        success: false,
        message: 'Error al obtener los usuarios, por favor intente de nuevo',
        outcome: []
     })  
    }
});