const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
// const config = require('./config/config')
const session = require("express-session")
const flash = require('connect-flash')

const app = express()
const port = 3000

// for connecting mongoodb
mongoose.connect("mongodb://localhost:27017/Hunchha_Class");


// for view
app.set('view engine', 'ejs')
app.set('views','view')

// parse requests of content-type - application/json
app.use(express.json());
 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'Session',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
//setting static folder
app.use(express.static(path.join(__dirname, "public")));

//for data fetching
// app.use(express.json());

//accesing router file
// const indexRouter = require('./route/index')
const productRouter = require('./route/admin/product')

app.use(flash());

//sedder call
const adminSeeder = require("./seeder")

//router calling of auth
const authRouter = require('./route/auth/user')
// const authRouter = require('./routes/auth/login')

//auth router register
app.use(authRouter)

//router calling user
const indexRouter = require('./route/admin/dashboard')
//router register
app.use(indexRouter)

//router calling for admin
const dashboardRouter = require('./route/admin/dashboard')
const { application } = require('express')

//admin router resgiter
app.use("/admin",dashboardRouter);
app.use('/admin' ,productRouter)

// seeder use
// app.use(adminSeeder)
app.get("/ok", (req, res)=>{
  res.render("admin/dashboard")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port} hillo`)
})