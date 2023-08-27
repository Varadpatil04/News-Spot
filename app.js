const express = require('express')

const app = express();
const port = 5001;


app.use(express.static("public"));
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/img'))


//Templating
app.set('views','./src/views')
app.set('view engine','ejs')


//Routing
const router = require('./src/routes/news')
app.use('/',router)







app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})