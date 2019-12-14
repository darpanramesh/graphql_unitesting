"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var pg = require('pg');
dotenv.config();
//database connection
var client = new pg.Client('postgres://uziuredp:vN3ElNqBW7A5PmBY9ixq50whG-TeXmb0@rajje.db.elephantsql.com:5432/uziuredp');
client.connect(function (err, res) {
    if (res) {
        console.log('Database Conncetd...');
    }
    else if (err) {
        return console.error(err, 'connection error:');
    }
});
exports.default = client;
// import mongoose from 'mongoose';
// const uri:string = "mongodb+srv://darpan:darpanramesh@cluster0-b9xcy.mongodb.net/test?retryWrites=true&w=majority"
// mongoose.connect(uri, {useNewUrlParser: true});
// export default mongoose;
