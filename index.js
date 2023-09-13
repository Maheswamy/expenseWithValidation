require('dotenv').config()


const express=require('express')
const cors=require('cors')
const {checkSchema}=require('express-validator')
const configure=require('./config/db')
const category=require('./app/controller/category-crtl')
const categorySchemaValidation=require('./app/helper/categorySchemaValidation')
const expenseSchemaValidation=require('./app/helper/expenseSchemaValidation')
const expense =require('./app/controller/expense-crtl')


const port =process.env.PORT||3097

const app=express()
configure()
app.use(express.json())
app.use(cors())


app.post('/api/categories',checkSchema(categorySchemaValidation),category.add)
app.get('/api/categories',category.all)
app.get('/api/categories/:id',category.single)



app.get('/api/expenses',expense.all)
app.get('/api/expenses/:id',expense.getone)
app.post('/api/expenses',checkSchema(expenseSchemaValidation),expense.add)
app.delete('/api/expenses/:id',expense.remove)
app.put('/api/expenses/:id',checkSchema(expenseSchemaValidation),expense.update)

app.listen(port,()=>{
console.log('server running in port ', port)
})

