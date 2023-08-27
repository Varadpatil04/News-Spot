const express = require('express')
const app = express.Router();

const axios = require('axios')


app.get('', async (req, res) => {
    // res.render('news')
    try {
        const newsAPI = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=015290affc784a718f299ccaef3ecebf")
        res.render('news', { data : newsAPI.data })
        // console.log(newsAPI.data)
    } catch (error) {
        if (error.response) {
        res.render('news', { data : null })
            // console.log(error.response.data)
            // console.log(error.response.status)
            // console.log(error.response.headers)
        } else if (error.request) {
        res.render('news', { data : null })

            // console.log(error.request)
        } else {
        res.render('news', { data : null })

            // console.log('Error', error.message);
        }
    }
})








module.exports = app;