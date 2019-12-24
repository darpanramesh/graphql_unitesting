const assert = require('assert')
const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)


describe('Get Data', () => {
       it('Returns all users', (done) => {
        request.get('/getdata')
        .expect(200).then( res=> {
            done()
        })
       
      })
      it('pagenot found', (done) => {
        request.get('/getd')
        .expect(404).then( res=> {
            assert.ok(res.body)
            done()
        })
      })
});





describe('Post Data', () => {
    it('add one data', (done) => {
     request.post('/post').send({id:1, title:"HTML", description:'Hyper text markup language'})
     .expect(200).then( res=> {
         done()
     })
    
   })
   it('Path Error', (done) => {
     request.post('/pos')
     .expect(404).then( res=> {
         assert.ok(res.body)
         done()
     })
   })
});



















// describe('Save Todo', () => {
//     it('Save to all users', (done) => {
//       request.post('/post').send({id: 1, titlw: "To do ", description: "To do something in life",age : 23})
//       .expect(200).then( res=> {
//          done()
//      })
//    })
//    it('Path Error', (done) => {
//     request.post('/user/SaveTod').send({name: "Job title", email: "To do something in life", phonenumber: 132,age : 23})
//     .expect(404).then( res=> {
//        done()
//    })
//   })
//   })