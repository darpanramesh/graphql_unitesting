import express from 'express';
import client from '../../Config/db'
const router: express.Router = express.Router();


router.get("/V2.0/getTodo", async (req: express.Request, res: express.Response) => {
    const usersData = await client.query("SELECT * FROM todos");
    res.send(usersData.rows);
    console.log(req.body)
})


router.post('/V2.0/addTodo', async (req: express.Request, res: express.Response) => {
    await client.query("INSERT INTO todos (title, description, id) VALUES ($1, $2, $3)",
    [req.body.title, req.body.description,req.body.id],
        (error: any, results: any) => {
          if (error) {
            throw error;
          }
          return res.send({
            message: "Todo Added!",
            todo: results
          });
        }
      );

})


router.put('/V2.0/editTodo', async (req:express.Request,res:express.Response)=>{
    await client.query("UPDATE todos SET title=$1, description=$2 WHERE id=$3",
    [req.body.title, req.body.description, req.body.id],
        (error: any, results: any) => {
          if (error) {
            throw error;
          }
          return res.send({
            message: "Todo Updated!",
            todo: results
          });
        }
      );
})


router.delete('/V2.0/deleteTodo', async (req:express.Request,res:express.Response)=>{
    await client.query("DELETE FROM todos WHERE id=$1",
    [req.body.id],
        (error: any, results: any) => {
          if (error) {
            throw error;
          }
          return res.send({
            message: "Todo Deleted!",
            todo: results
          });
        }
      );
})





// router.get("/V2.0/getTodo", async (req:express.Request,res:express.Response)=>{
//     const usersData = await Data.find();
//     res.send(usersData);
//         console.log(req.body)
// })

// router.get("/V2.0/getTodo/:id", async (req:express.Request,res:express.Response)=>{
//     const usersData = await Data.findOne();
//     res.send(usersData);
//         console.log(req.body)
// })

// router.post('/V2.0/addTodo',(req:express.Request,res:express.Response)=>{
//     console.log(req.body)
//     const todoData = new Data(req.body);
//     todoData.save().then(()=>{
//         res.send({
//             message:'Item Successfully Added!'
//         })
//     })
//     .catch((err) =>{
//         res.send({error:err})
//     })
// })

// router.put('/V2.0/putTodo/:id', async (req:express.Request,res:express.Response)=>{
//     const todoTitle = await Data.findOneAndUpdate({_id:req.body.id},{
//         title:req.body.title,
//         description:req.body.description,
//         task:req.body.task
//     });
//     res.send(todoTitle);
//     console.log(req.body)
// })

// router.delete('/V2.0/deleteTodo/:id', async (req:express.Request,res:express.Response)=>{
//     const todoTitle = await Data.findOneAndDelete({_id:req.body.id});
//     res.send(todoTitle);
//     console.log(req.body)
// })



module.exports = router