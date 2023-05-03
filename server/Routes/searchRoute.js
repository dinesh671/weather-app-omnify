const express = require('express');
const dotenv = require('dotenv').config();
// console.log(process.env.API_KEY); 
const API_key = process.env.API_KEY;
const router = express.Router();

router.post('/', (req, res) => {
  const searchData = req.body;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${searchData.searchVal.latitude}&lon=${searchData.searchVal.longitude}&units=metric&appid=${API_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json(data); 
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
