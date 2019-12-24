var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema,graphql } = require('graphql');
const bodyParser = require('body-parser')
var app = express();


var schema = buildSchema(`
  type todos{
      id:Int
      title:String
      description:String
  }
  type Query {
    todo: [todos]
  }
`);

let obj = [];

app.use(express.json())

app.post('/post',(req,res)=>{
  console.log(req.body)
    obj.push(req.body)
})

var root = {todo: obj};
app.get('/getdata',(req,res)=>{
  const query = "query{todo{ id title description}}"
  graphql(schema, query, root)
  .then(response=>{
    res.send(response);
  }).catch(error=>{
    console.log(error)
  })
})



app.use('/data', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));


module.exports = app