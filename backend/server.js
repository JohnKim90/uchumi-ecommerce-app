const app = require ('./app')
const connectDataBase= require('./config/database')

const dotenv = require('dotenv');

// setting up config file
dotenv.config({path: 'backend/config/config.env'})

// connecting database
connectDataBase();

app.listen(process.env.PORT,()=>{
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} node.`)
})