"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./Build/src/Config/db"));
var cors_1 = __importDefault(require("cors"));
var App = express_1.default();
var db = db_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database successfully Connected!');
});
App.use(cors_1.default());
// App.get('/',(req,res)=>{
//     res.send("Hello World")
// })
// const port: number =  4004;
var PORT = process.env.PORT || 4004;
App.listen(PORT, function () {
    console.log("Server is running..");
});
App.use(express_1.default.json());
App.use('/todo', require('./Build/src/Routes'));
