import * as dotenv from 'dotenv';
const pg = require('pg');
dotenv.config();

//database connection
const client = new pg.Client('postgres://uziuredp:vN3ElNqBW7A5PmBY9ixq50whG-TeXmb0@rajje.db.elephantsql.com:5432/uziuredp')
client.connect((err:any,res:any)=>{
    if(res){
        console.log('Database Conncetd...')
    }
    else if(err){
        return console.error(err, 'connection error:')
    }
})

export default client;









// import mongoose from 'mongoose';

// const uri:string = "mongodb+srv://darpan:darpanramesh@cluster0-b9xcy.mongodb.net/test?retryWrites=true&w=majority"
// mongoose.connect(uri, {useNewUrlParser: true});

// export default mongoose;