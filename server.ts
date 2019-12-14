import express from 'express';
import data from './src/Config/db';
import cors from 'cors'
const App:express.Application = express();

const db = data.connection;

db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function () {
    console.log('Database successfully Connected!')
});

App.use(cors())
// App.get('/',(req,res)=>{
//     res.send("Hello World")
// })

// const port: number =  4004;
const PORT= process.env.PORT || 4004;

App.listen(PORT, () => {
    console.log("Server is running..")
})

App.use(express.json())


App.use('/todo', require('./src/Routes'))